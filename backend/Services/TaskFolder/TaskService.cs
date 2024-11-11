using AutoMapper;
using backend.DTO.TaskDTOs;
using backend.Models;
using backend.Repository.Task;

namespace backend.Services.TaskFolder;

public class TaskService(ITaskRepo taskRepo, IMapper mapper) : ITaskService
{
    public readonly ITaskRepo _taskRepo = taskRepo;
    public readonly IMapper _mapper = mapper;
    public Tasks CreateNewTask(TaskRequestDto tasksRequestDto)
    {
        Tasks task = _mapper.Map<Tasks>(tasksRequestDto);
        Tasks newTask = _taskRepo.CreateTask(task);
        return _mapper.Map<Tasks>(newTask);
    }

    public List<Tasks> GetAllTasks()
    {
       return _taskRepo.GetAllTasks();
    }

    public Tasks? DeleteTask(int id)
    {
        return _taskRepo.DeleteTask(id);
    }

    public List<TaskResponseDTO> GetAllUserTasks(int id)
    {
     var userTasks = _taskRepo.GetAllUserTasks(id);
        return _mapper.Map<List<TaskResponseDTO>>(userTasks);
    }

public Tasks? ChangeStateOnTask(int id, UpdateTaskDto state)
{
    return _taskRepo.ChangeStateOnTask(id, state);
}

  
}