using backend.Data;
using backend.Models;

namespace backend.Repository.Users;
//Repot har hand om kopplingen till databasen
public class UserRepo(FlowboardContext db) : IUserRepo
{

    private readonly FlowboardContext _db = db;

    public List<Board> GetUserBoards(string id)
    {
       return _db.Boards
         .Where(board => board.UserId == id)
       .ToList();
    }

    public List<User> GetAllUsers()
    {
        return _db.Customers.ToList();
    }

    public User? DeleteUser(string userId)
    {
        User? user = _db.Customers.FirstOrDefault(user => user.Id == userId);
        if(user != null)
        _db.Customers.Remove(user);
        _db.SaveChanges();
        return user;

    }
}
