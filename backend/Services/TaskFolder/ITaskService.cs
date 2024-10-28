using backend.DTO.TaskDTOs;
using backend.Models;

namespace backend.Services.TaskFolder;

public interface ITaskService
{
    List<Tasks> GetAllTasks();
    List<TaskRequestDto> GetAllUserTasks(string taskId);
    Tasks CreateNewTask(TaskRequestDto tasksRequestDto);

    Tasks? DeleteTask(int id);
}