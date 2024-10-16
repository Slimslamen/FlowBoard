using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class FlowboardContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Card> Cards { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder option)
    {
        option.UseNpgsql("",
        option => option.EnableRetryOnFailure());
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
     modelBuilder
     .Entity<User>()
     .HasKey(u => u.Id);
     modelBuilder
     .Entity<Card>()
    .HasKey(c => c.Id);
    }
}