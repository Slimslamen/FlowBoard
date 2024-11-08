using backend.DTO.AuthDtos;
using backend.DTO.BoardDTO;
using backend.Models;
using backend.Services;
using backend.Services.UserFolder;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/users")]
[Consumes("application/json")]
[Produces("application/json")]
public class UserController(IUserService service) : ControllerBase
{
    private readonly IUserService _service = service;

    [HttpGet("GetAllUsers")]
    [Authorize(Roles = "admin")]
    public ActionResult<List<UserDto>> GetAllUsers()
    {
        return _service.GetUsers();
    }

    [HttpGet("GetUserBoard")]
    [Authorize(Roles = "admin")]
    public ActionResult<List<BoardResponseDTO>> GetUserBoard(string id)
    {
        return _service.GetUserBoard(id);
    }   
    
    [HttpDelete("DeleteUser")]
    [Authorize(Roles = "admin")]
    public ActionResult<User?> DeleteUser(string userId)
    {
        return _service.DeleteUser(userId);
    }
}