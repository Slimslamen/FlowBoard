using backend.Models;

namespace backend.Repository.Task;


public interface ITaskRepo
{
    List<Tasks> GetAllTasks();

    Tasks CreateTask(Tasks tasks);
}