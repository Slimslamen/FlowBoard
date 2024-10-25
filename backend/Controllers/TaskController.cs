using backend.DTO.BoardDTO;
using backend.Models;
using backend.Services;
using backend.Services.TaskFolder;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;
[ApiController]
[Route("api/tasks")]
public class TaskController(ITaskService taskService) : ControllerBase
{
    public readonly ITaskService _taskService = taskService;

    [HttpGet("GetTasks")]
    [Authorize(Roles = "admin")]
    public ActionResult<List<Tasks>> GetTasks()
    {
        return _taskService.GetAllTasks();
    }

    [HttpPost("PostTask")]

    public ActionResult<Tasks> CreateBoard(TaskRequestDto taskRequestDto)
    {
        return _taskService.CreateNewTask(taskRequestDto);
    }

    
    [HttpDelete("{id}")]

    public ActionResult<Tasks> DeleteById(int id)
    {
        Tasks? task = _taskService.DeleteTask(id);
        if (task == null)
        {
            return NotFound();
        }

        return NoContent();

    }
}