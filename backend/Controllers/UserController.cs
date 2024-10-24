using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/users")]
public class UserController(IUserService service) : ControllerBase
{
    private readonly IUserService _service = service;


    [HttpGet("GetCards")]
    [Authorize(Policy = "AllowAdmin")]
    public ActionResult<List<Card>> GetCards()
    {
        return _service.GetAllResponseCards();
    }

    [HttpPost("CreateCard")]
    public ActionResult<Card> CreateCard(Card card)
    {
        return _service.CreateResponseCard(card);
    }
    [HttpPost]
    public ActionResult<Tasks> CreateTask(Tasks task)
    {
        return _service.CreateResponseTask(task);
    }
}