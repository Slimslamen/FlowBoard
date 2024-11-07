using backend.DTO.AuthDtos;
using backend.DTO.BoardDTO;
using backend.Models;

namespace backend.Services.UserFolder;

public interface IUserService
{
    List<BoardResponseDTO> GetUserBoard(string id);
    List<UserDto> GetUsers();
    User? DeleteUser(string userId);
    
}