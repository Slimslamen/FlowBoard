using backend.DTO.TaskDTOs;
using backend.Models;

namespace backend.Repository.Task;


public interface ITaskRepo
{
    List<Tasks> GetAllTasks();
      List<Tasks> GetAllUserTasks(int id);

    Tasks CreateTask(Tasks tasks);

    Tasks? DeleteTask(int id);

    Tasks? ChangeStateOnTask(int id, UpdateTaskDto state );
}