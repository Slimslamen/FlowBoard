using System.Data.Common;
using backend.Data;
using backend.DTO.BoardDTO;
using backend.Models;
using Microsoft.AspNetCore.Http.HttpResults;
namespace backend.Repository.Boards;


public class BoardRepo(FlowboardContext db) : IBoardRepo
{
    private readonly FlowboardContext _db = db;

    public Board CreateBoard(Board board)
    {
        _db.Boards.Add(board);
        _db.SaveChanges();
        return board;

    }

    public List<Board> GetAllBoards()
    {
        return _db.Boards
        .ToList();
    }


    public Board? DeleteOneBoard(int id)
    {
        Board? board = _db.Boards.Find(id);
        if (board != null)
        {
            _db.Boards.Remove(board);
            _db.SaveChanges();
            return board;

        } else 
        {
            return null;
        }

    }

    public List<Board> GetAllUserBoard(string userId)
    {
       return _db.Boards
         .Where(board => board.UserId == userId)
       .ToList();
    }
}