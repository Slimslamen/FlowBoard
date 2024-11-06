using backend.DTO.TaskDTOs;
using backend.Models;

namespace backend.Services.TaskFolder;

public interface ITaskService
{
    List<Tasks> GetAllTasks();
    List<TaskResponseDTO> GetAllUserTasks(int id);
    Tasks CreateNewTask(TaskRequestDto tasksRequestDto);

    Tasks? DeleteTask(int id);
}