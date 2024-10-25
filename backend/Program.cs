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
builder.Services.AddScoped<IBoardService, BoardService>();

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
    opt.AccessDeniedPath = string.Empty;
    opt.Events.OnRedirectToAccessDenied = context => {
        context.Response.StatusCode = 401;
        return Task.CompletedTask;
    };
});

builder.Services.AddAuthorization();

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

app.UseAuthentication();
app.UseAuthorization();


app.Run();

