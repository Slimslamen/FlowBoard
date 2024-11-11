using backend.Data;
using backend.DTO.TaskDTOs;
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


public Tasks? ChangeStateOnTask(int id, UpdateTaskDto state)
{

    Tasks? task = _db.Tasks.Find(id);
    if (task != null)
    task.State = state.State;
    _db.SaveChanges();
    return task; 
}

}