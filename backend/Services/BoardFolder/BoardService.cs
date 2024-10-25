using AutoMapper;
using backend.DTO.BoardDTO;
using backend.Models;
using backend.Repository;
using backend.Repository.Boards;

namespace backend.Services.BoardFolder;

public class BoardService(IBoardRepo repo, IMapper mapper) : IBoardService
{
    private readonly IBoardRepo _repo = repo;
    private readonly IMapper _mapper = mapper;

    public Board CreateNewBoard(BoardRequestDto boardRequestDto)
    {
        Board board = _mapper.Map<Board>(boardRequestDto);
        Board newBoard = _repo.CreateBoard(board);
        return _mapper.Map<Board>(newBoard);
    }

    public List<Board> GetAllBoards()
    {
        return _repo.GetAllBoards();
    }

    public Board? DeleteOneBoard(int id)
    {
        return _repo.DeleteOneBoard(id);
    }
}