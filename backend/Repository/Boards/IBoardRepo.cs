using backend.DTO.BoardDTO;
using backend.Models;

namespace backend.Repository.Boards;

public interface IBoardRepo
{
    List<Board> GetAllBoards();
    Board CreateBoard(Board board);

    Board? DeleteOneBoard(int id);

    List<Board> GetAllUserBoard(string userId);

}