using backend.Models;

namespace backend.Repository.Users;

public interface IUserRepo
{
    List<User> GetAllUsers();
}