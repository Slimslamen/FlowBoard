using backend.Models;
using backend.Repository;
using backend.Repository.Boards;

namespace backend.Services;

public class BoardService(IBoardRepo repo) : IBoardService
{
    private readonly IBoardRepo _repo = repo;

    public Board CreateResponseBoard(Board board)
    {
        throw new NotImplementedException();
    }

    public Tasks CreateResponseTask(Tasks task)
    {
        throw new NotImplementedException();
    }

    public List<Board> GetAllResponseBoard()
    {
        throw new NotImplementedException();
    }
}