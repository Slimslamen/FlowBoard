using backend.Data;
using backend.Models;

namespace backend.Repository.Users;

public class UserRepo(FlowboardContext db) : IUserRepo
{

    private readonly FlowboardContext _db = db;
    public List<User> GetAllUsers()
    {
        return _db.Customers.ToList();
    }
}
