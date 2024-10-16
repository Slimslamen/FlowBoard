using backend.Models;

namespace backend.Data;

public class FlowboardContext : DbContext
{
    public Dbset<User> Users { get; set; }
    public Dbset<Card> Cards { get; set; }

    protected override void onConfiguring(dbContextOptionsBuilder option)
    {
        option.UseNpgsql(""
        option => option.EnableRetryOnFailure());
    }
    protected override void OnModel OnModelCreating(ModelBuilder modelBuilder)
    {
     modelBuilder
     .Entity<User>()
     .HasKey(u => u.Id);
     modelBuilder
     .Entity<Card>()
    .HasKey(c => c.Id);
    }
}