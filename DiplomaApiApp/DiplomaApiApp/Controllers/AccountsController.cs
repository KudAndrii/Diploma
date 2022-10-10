using DiplomaApiApp.Models;
using Infrastructure.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;

namespace DiplomaApiApp.Controllers
{
    [ApiController]
    [Route("accounts")]
    public class AccountsController : Controller
    {
        private readonly ILogger<AccountsController> _logger;
        private readonly IUserService _userService;

        public AccountsController(ILogger<AccountsController> logger, IUserService userService)
        {
            _logger = logger;
            _userService = userService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequestModel userModel)
        {
            if (ModelState.IsValid)
            {
                var user = _userService.GetUser(userModel.Login!, userModel.Password!);

                if (user == null)
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
