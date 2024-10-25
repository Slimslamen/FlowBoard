using backend.DTO;
using backend.DTO.BoardDTO;
using backend.Models;

namespace backend.Services.BoardFolder;

public interface IBoardService
{
    List<Board> GetAllBoards();
    Board CreateNewBoard(BoardRequestDto boardRequestDto);
    Board? DeleteOneBoard(int id);

}