using backend.DTO;
using backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;

namespace backend.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController(IMapper mapper, UserManager<User> userManager, SignInManager<User> signInManager) : ControllerBase
{
    private readonly IMapper _mapper = mapper;
    private readonly UserManager<User> _userManager = userManager;
    private readonly SignInManager<User> _signInManager = signInManager;

[HttpPost("register")]

public async Task<ActionResult> Register([FromBody] RegisterDto registerDto)
{
    if (registerDto == null)
    return BadRequest();

       User user = _mapper.Map<User>(registerDto);
        IdentityResult result = await _userManager.CreateAsync(user, registerDto.Password);


    if (!result.Succeeded)
    {
        return BadRequest(result.Errors);
    } else 
    {
        return Created();
    }
}


[HttpPost("login")]
public async Task<ActionResult> Login([FromBody] LoginDto loginDto)
{
    _signInManager.AuthenticationScheme = IdentityConstants.ApplicationScheme;
     var result = await _signInManager.PasswordSignInAsync(loginDto.Email, loginDto.Password, false, false);

    if (!result.Succeeded)
    {
        return Problem(result.ToString(), statusCode: StatusCodes.Status401Unauthorized);
    } else
    {
        return NoContent();
    }
}
}