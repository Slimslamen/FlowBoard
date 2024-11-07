using backend.Data;
using backend.Models;

namespace backend.Repository.Users;

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
}
