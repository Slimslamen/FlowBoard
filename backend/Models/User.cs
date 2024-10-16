namespace backend.Models;

public class User(int id, string username, string email, string password)
{
    public int Id {get;set;} = id;
    public string Username {get;set;} = username;
    public string Email {get;set;} = email;
    public string Password {get;set;} = password;
}