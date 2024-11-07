using backend.DTO;
using backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using backend.DTO.AuthDtos;
using System.Security.Claims;

namespace backend.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController(IMapper mapper, UserManager<User> userManager, SignInManager<User> signInManager) : ControllerBase
{
    private readonly IMapper _mapper = mapper;
    private readonly UserManager<User> _userManager = userManager;
    private readonly SignInManager<User> _signInManager = signInManager;

    [HttpPost("register")]

    public async Task<ActionResult> Register(RegisterDto registerDto)
    {
        if (registerDto == null)
            return BadRequest();
        

        User user = _mapper.Map<User>(registerDto);
        IdentityResult result = await _userManager.CreateAsync(user, registerDto.Password);


        if (!result.Succeeded)
        {
            return BadRequest(result.Errors);
        }
        
        if(registerDto.AdminCode == 4444)
        {
            await _userManager.AddToRoleAsync(user, "admin");
        }
        else
        {
             await _userManager.AddToRoleAsync(user, "user");
        }
            return Created();
        
    }


    [HttpPost("login")]
    public async Task<ActionResult<LoginResponseDto>> Login(LoginDto loginDto)
    {
        
        _signInManager.AuthenticationScheme = IdentityConstants.ApplicationScheme;
        var result = await _signInManager.PasswordSignInAsync(loginDto.Username, loginDto.Password, false, false);
         List<string> roles = User.Claims.Where(c => c.Type == ClaimTypes.Role).Select(c => c.Value).ToList();
        string id = User.FindFirstValue(ClaimTypes.NameIdentifier) ?? "unknown";
        if (!result.Succeeded)
        {
            return Problem(result.ToString(), statusCode: StatusCodes.Status401Unauthorized);
        }
        else
        {
            return new LoginResponseDto(id, roles);
        }
    }
    [HttpGet("CurrentUser")]
    public ActionResult<UserDto> GetCurrentUser()
    {
        string id = User.FindFirstValue(ClaimTypes.NameIdentifier) ?? "unknown";
        string name = User.Identity?.Name ?? "unknown";
        List<string> roles = User.Claims.Where(c => c.Type == ClaimTypes.Role).Select(c => c.Value).ToList();

        return new UserDto(id ,name, roles);
    }

    [HttpPost("SignOut")]
    public async Task<ActionResult<SignOutDto>> SignOut (SignOutDto signOutDto)
    {
       await _signInManager.SignOutAsync();
       return signOutDto;
    }


}