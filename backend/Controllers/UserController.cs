using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/users")]
public class UserController(IBoardService service) : ControllerBase
{
    private readonly IBoardService _service = service;


    [HttpGet("GetCards")]
    [Authorize(Policy = "AllowAdmin")]
    public ActionResult<List<Card>> GetCards()
    {
        return _service.GetAllResponseCards();
    }
}