using backend.DTO.BoardDTO;
using backend.Models;

namespace backend.Repository.Users;

public interface IUserRepo
{
    List<User> GetAllUsers();
    List<Board> GetUserBoards(string id);
}