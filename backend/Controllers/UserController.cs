using backend.DTO.AuthDtos;
using backend.Models;
using backend.Services;
using backend.Services.UserFolder;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/users")]
public class UserController(IUserService service) : ControllerBase
{
    private readonly IUserService _service = service;

    [HttpGet("GetAllUsers")]
    [Authorize(Roles = "admin")]
    public ActionResult<List<UserDto>>GetAllUsers()
    { 
        return  _service.GetUsers();
    }
}