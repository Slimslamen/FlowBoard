using AutoMapper;
using backend.DTO;
using backend.DTO.AuthDtos;
using backend.Models;

namespace backend.Profiles;

public class UserProfile : Profile{
    public UserProfile()
    {
        CreateMap<RegisterDto, User>();
    }
}