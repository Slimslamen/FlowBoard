using backend.DTO.TaskDTOs;
using backend.Models;
using backend.Services;
using backend.Services.TaskFolder;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;
[ApiController]
[Route("api/tasks")]
[Consumes("application/json")]
[Produces("application/json")]
public class TaskController(ITaskService taskService) : ControllerBase
{
    public readonly ITaskService _taskService = taskService;

    [HttpGet("Get All Tasks")]
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

    
    [HttpDelete("id")]

    public ActionResult<Tasks> DeleteById(int id)
    {
        Tasks? task = _taskService.DeleteTask(id);
        if (task == null)
        {
            return NotFound();
        }

        return NoContent();

    }
        [HttpGet("GetUserTasks")]
        
     public ActionResult<List<TaskResponseDTO>> GetUserTasks(int id)
    {
        return _taskService.GetAllUserTasks(id);
    }
[HttpPatch("change-state/{id}")]
public ActionResult<TaskResponseDTO> ChangeTaskState(int id, [FromBody] TaskRequestDto request)
{
    // Uppdatera uppgiftens status baserat på ID och den nya statusen
    var updatedTask = _taskService.ChangeStateOnTask(id, request.State);
    if (updatedTask == null)
    {
        return NotFound();
    }
    // Returnera uppdaterad uppgift om ändringen lyckades
    return Ok(updatedTask);
}


}