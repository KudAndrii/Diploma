using DiplomaApiApp.Models;
using Infrastructure.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;

namespace DiplomaApiApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController : Controller
    {
        private readonly ILogger<AccountController> _logger;
        private readonly IUserService _userService;

        public AccountController(ILogger<AccountController> logger, IUserService userService)
        {
            _logger = logger;
            _userService = userService;
        }

        [HttpPost("Login")]
        public IActionResult Login([FromBody] UserRequestModel userModel)
        {
            if (ModelState.IsValid)
            {
                var user = _userService.GetUser(userModel.Login!, userModel.Password!);

                if (user.Login == null)
                {
                    return BadRequest(new { message = "Login or password is incorrect" });
                }
                else
                {
                    // generating of jwt token
                    return Ok(new { userId = user.UserId, token = "123" });
                }
            }

            return BadRequest(new { message = "Data loss has occured" });
        }
    }
}
