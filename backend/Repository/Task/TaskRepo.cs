using backend.Data;
using backend.Models;

namespace backend.Repository.Task;

public class TaskRepo(FlowboardContext db) : ITaskRepo
{
    private readonly FlowboardContext _db = db;

    public Tasks CreateTask(Tasks tasks)
    {
        _db.Tasks.Add(tasks);
        _db.SaveChanges();
        return tasks;
    }

    public List<Tasks> GetAllTasks()
    {
        return _db.Tasks.ToList();
    }

    public Tasks? DeleteTask(int id)
    {
        Tasks? task = _db.Tasks.Find(id);
        if (task != null)
        {
            _db.Tasks.Remove(task);
            _db.SaveChanges();
            return task;

        }
        else
        {
            return null;
        }
    }

    public List<Tasks> GetAllUserTasks(int boardId)
    {
           return _db.Tasks
           .Where(task => task.BoardId == boardId)
           .ToList();
    }


public Tasks? ChangeStateOnTask(int id, string newState)
{
    // Hitta uppgiften med det angivna ID
    var task = _db.Tasks.FirstOrDefault(t => t.Id == id);
    if (task != null)
    {
        // Uppdatera status
        task.State = newState;
        _db.SaveChanges(); // Spara ändringarna till databasen
    }
    return task; // Returnera den uppdaterade uppgiften
}

}