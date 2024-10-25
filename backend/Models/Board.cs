using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.Extensions.Configuration.UserSecrets;

namespace backend.Models;

public class Board(string name, string userId)
{
    public int Id;

    public string Name { get; set; } = name;

    [ForeignKey("User")]
    public string UserId { get; set; } = userId;
    public User? User { get; set; }  
    public List<Card>? Cards { get;set; }
}