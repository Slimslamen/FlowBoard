using System.Security.Claims;
using backend.Data;
using backend.DTO.AuthDtos;
using backend.Models;
using backend.Repository;
using backend.Repository.Boards;
using backend.Repository.Task;
using backend.Repository.Users;
using backend.Services;
using backend.Services.BoardFolder;
using backend.Services.TaskFolder;
using backend.Services.UserFolder;
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

builder.Services.AddScoped<IBoardRepo, BoardRepo>();
builder.Services.AddScoped<IBoardService, BoardService>();
builder.Services.AddScoped<ITaskRepo, TaskRepo>();
builder.Services.AddScoped<ITaskService, TaskService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IUserRepo, UserRepo>();

builder.Services.AddIdentityCore<User>()
.AddRoles<IdentityRole>()
.AddEntityFrameworkStores<FlowboardContext>()
.AddApiEndpoints();

builder.Services.AddCors( options =>
{
    options.AddDefaultPolicy(policy => 
    {
        policy.WithOrigins("http://localhost:5500","http://localhost:4200", "http://localhost:5228" )
        .WithHeaders("Content-Type", "Authorization")
        .WithMethods("GET","POST","DELETE", "PATCH")
        .AllowCredentials();
    });
});

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


builder.Services.AddAuthorization(opt => {
    opt.AddPolicy("UserParam", Policy => {
        Policy.RequireAssertion( context => {
            string userId = context.User.FindFirstValue(ClaimTypes.NameIdentifier) ?? "Unknown";
         var queryParam = new HttpContextAccessor()?.HttpContext?.Request.Query.FirstOrDefault(query => query.Key == "userId");
         return queryParam != null && queryParam?.Value.ToString() == userId;
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
app.UseCors();

app.UseAuthentication();
app.UseAuthorization();


app.Run();

