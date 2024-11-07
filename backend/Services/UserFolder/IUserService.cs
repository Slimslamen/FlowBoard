using backend.DTO.AuthDtos;

namespace backend.Services.UserFolder;

public interface IUserService
{
    List<UserDto> GetUsers();
}