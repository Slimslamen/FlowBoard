using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

public class BoardController(IBoardService service) : ControllerBase
{


    public readonly IBoardService _service = service;


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