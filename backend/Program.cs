using System.Security.Claims;
using backend.Data;
using backend.Models;
using backend.Repository;
using backend.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<FlowboardContext>();
FlowboardContext db = new();

builder.Services.AddControllers();
builder.Services.AddAutoMapper(typeof(Program));

builder.Services.AddScoped<IUserRepo, UserRepo>();
builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddIdentityCore<User>()
.AddRoles<IdentityRole>()
.AddEntityFrameworkStores<FlowboardContext>()
.AddApiEndpoints();


builder.Services.AddAuthentication()
.AddCookie(IdentityConstants.ApplicationScheme, opt => {
    opt.LoginPath = string.Empty;
    opt.Events.OnRedirectToLogin = context => {
        context.Response.StatusCode = 401;
        return Task.CompletedTask;
    };
});
builder.Services.AddAuthorization(opt => {
    opt.AddPolicy("AllowAdmin", policy => 
    {
        policy.RequireAssertion(Context => 
        {
            var UserAdmin = Context.User.FindFirst(c => c.Type == "AdminCode");
            if(UserAdmin != null && int.TryParse(UserAdmin?.Value, out int adminCode))
            {
                return adminCode == 4444;
            }
            return false;
        });
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();
//app.MapIdentityApi<IdentityUser>();
app.UseHttpsRedirection();

app.UseAuthorization();
app.UseAuthentication();

app.Run();

