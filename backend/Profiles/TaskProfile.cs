using AutoMapper;
using backend.DTO.TaskDTOs;
using backend.Models;

namespace backend.Profiles;

public class TaskProfile : Profile{
    public TaskProfile()
    {
        CreateMap<TaskRequestDto, Tasks>();
        CreateMap<Tasks, TaskRequestDto>();
    }
}