using backend.Models;

namespace backend.Repository.Task;


public interface ITaskRepo
{
    List<Tasks> GetAllTasks();
      List<Tasks> GetAllUserTasks(string userId);

    Tasks CreateTask(Tasks tasks);

    Tasks? DeleteTask(int id);
}