using AutoMapper;
using backend.DTO;
using backend.Models;

namespace backend.Profiles;

public class UserProfile : Profile{
    public UserProfile()
    {
        CreateMap<RegisterDto, User>();
    }
}