using backend.DTO;
using backend.Models;

namespace backend.Services;

public interface IBoardService
{
    List<Board> GetAllResponseBoard();
    Board CreateResponseBoard(Board board);
    Tasks CreateResponseTask(Tasks task);

}