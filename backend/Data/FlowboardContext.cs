using backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;


// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
public class FlowboardContext : IdentityDbContext<User>
{
    public DbSet<User> Customers { get; set; }
    public DbSet<Board> Boards { get; set; }
    public DbSet<Tasks> Tasks { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder option)
    {
        var connectionString = Environment.GetEnvironmentVariable("CONNECTION_STRING", EnvironmentVariableTarget.User);
        if (!option.IsConfigured)
        {

            option.UseNpgsql(connectionString,
            options => options.EnableRetryOnFailure());

        }
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
        .Entity<User>()
        .HasKey(u => u.Id);
        base.OnModelCreating(modelBuilder);

        modelBuilder
        .Entity<Board>()
        .HasKey(u => u.Id);
        base.OnModelCreating(modelBuilder);
        modelBuilder
            .Entity<Tasks>()
            .HasKey(u => u.Id);
        base.OnModelCreating(modelBuilder);


        IdentityRole adminRole = new("admin")
        {
            NormalizedName = "ADMIN"
        };
        IdentityRole userRole = new("user")
        {
            NormalizedName = "USER"
        };
        modelBuilder
        .Entity<IdentityRole>()
        .HasData(adminRole, userRole);

    }
}