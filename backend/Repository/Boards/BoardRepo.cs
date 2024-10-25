using backend.Data;
using backend.Models;
namespace backend.Repository.Boards;


public class BoardRepo(FlowboardContext db) : IBoardRepo
{
    private readonly FlowboardContext _db = db;

    public Board CreateBoard(Board board)
    {
        throw new NotImplementedException();
    }

    public List<Board> GetAllBoards()
    {
        throw new NotImplementedException();
    }
}