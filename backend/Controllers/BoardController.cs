using backend.DTO.BoardDTO;
using backend.Models;
using backend.Services;
using backend.Services.BoardFolder;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;
[ApiController]
[Route("api/boards")]
public class BoardController(IBoardService service) : ControllerBase
{
    public readonly IBoardService _service = service;

    [HttpGet("Get All Boards")]
    [Authorize(Roles = "admin")]
    public ActionResult<List<Board>> GetBoards()
    {
        return _service.GetAllBoards();
    }

    [HttpPost("PostBoard")]

    public ActionResult<Board> CreateBoard(BoardRequestDto boardRequestDto)
    {

        return _service.CreateNewBoard(boardRequestDto);
    }

    [HttpDelete("{id}")]

    public ActionResult<Board> DeleteById(int id)
    {
        Board? board = _service.DeleteOneBoard(id);
        if (board == null)
        {
            return NotFound();
        }

        return NoContent();

    }
    [HttpGet("Get all user boards")]
    [Authorize(Policy = "UserParam")]
     public ActionResult<List<BoardRequestDto>> GetUserBoards([FromQuery] string userId)
    {

        return _service.GetAllUserBoards(userId);
    }

}