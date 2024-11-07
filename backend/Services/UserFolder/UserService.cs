using AutoMapper;
using backend.DTO.AuthDtos;
using backend.Models;
using backend.Repository.Users;

namespace backend.Services.UserFolder;

public class UserService(IUserRepo repo, IMapper mapper) : IUserService
{
    private readonly IUserRepo _repo = repo;
    private readonly IMapper _mapper = mapper;
    public List<UserDto> GetUsers()
    {
        List<User> user = _repo.GetAllUsers();
        List<UserDto> newUsers = _mapper.Map<List<UserDto>>(user);
        return newUsers;
    }
}