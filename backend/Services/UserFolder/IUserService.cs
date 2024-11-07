using backend.DTO.AuthDtos;
using backend.DTO.BoardDTO;

namespace backend.Services.UserFolder;

public interface IUserService
{
    List<BoardResponseDTO> GetUserBoard(string id);
    List<UserDto> GetUsers();
    
}