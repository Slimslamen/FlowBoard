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

    public List<Tasks> GetAllUserTasks(string userId)
    {
           return _db.Tasks
           .Where(task => task.CardId == userId)
           .ToList();
    }
}