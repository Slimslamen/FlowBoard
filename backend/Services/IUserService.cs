using backend.DTO;

namespace backend.Services;

public interface IUserService
{
    LoginDto GetUserById(int id);
    LoginDto CreateUser(RegisterDto userDTO);
}