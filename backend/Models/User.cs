using Microsoft.AspNetCore.Identity;

namespace backend.Models;

public class User() : IdentityUser
{
    public int AdminCode { get; set; }
    public List<Board>? Board { get; set; }
}