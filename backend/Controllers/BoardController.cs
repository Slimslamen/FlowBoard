using backend.DTO.BoardDTO;
using backend.Models;
using backend.Services;
using backend.Services.BoardFolder;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;
[ApiController]
[Route("api/boards")]
[Consumes("application/json")]
[Produces("application/json")]
public class BoardController(IBoardService service) : ControllerBase
{
    public readonly IBoardService _service = service;


//För att hämta alla Boards så måste man ha rollen admin 
    [HttpGet("GetAllBoards")]
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

    [HttpDelete("DeleteBoard")]

    public ActionResult<Board> DeleteById(int id)
    {
        Board? board = _service.DeleteOneBoard(id);
        if (board == null)
        {
            return NotFound();
        }

        return NoContent();
    }

    //I Program så har vi satt en policy för vem som kommer åt userBoards 
    [HttpGet]
    [Authorize(Policy = "UserParam")]
     public ActionResult<List<BoardResponseDTO>> GetUserBoards([FromQuery] string userId)
    {
        return _service.GetAllUserBoards(userId);
    }

    [HttpGet("id")]
    public ActionResult<Board> GetBoard([FromQuery] int id)
    {
        var board = _service.GetResponseBoard(id);
        if (board == null)
        {
            return NotFound();
        }
        return board;
    }

}