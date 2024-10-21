using backend.Data;
using backend.Models;
using backend.Services;
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

builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddIdentityCore<User>()
.AddEntityFrameworkStores<FlowboardContext>();

builder.Services.AddAuthentication()
.AddCookie(IdentityConstants.ApplicationScheme, opt => {
    opt.LoginPath = string.Empty;
    opt.Events.OnRedirectToLogin = context => {
        context.Response.StatusCode = 401;
        return Task.CompletedTask;
    };
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();
app.MapIdentityApi<IdentityUser>();
app.UseHttpsRedirection();

app.UseAuthorization();
app.UseAuthentication();

app.Run();

