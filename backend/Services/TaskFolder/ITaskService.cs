using backend.DTO.BoardDTO;
using backend.Models;

namespace backend.Services.TaskFolder;

public interface ITaskService
{
    List<Tasks> GetAllTasks();
    Tasks CreateNewTask(TaskRequestDto tasksRequestDto);

    Tasks? DeleteTask(int id);
}