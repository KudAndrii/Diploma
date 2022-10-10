using DiplomaApiApp.Models;
using DiplomaApiApp.Services;
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
        private readonly TokenService _tokenService;

        public AccountsController(ILogger<AccountsController> logger, IUserService userService, TokenService tokenService)
        {
            _logger = logger;
            _userService = userService;
            _tokenService = tokenService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestModel userModel)
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
                    var tokenResponse = await _tokenService.GetToken("diplomaapi.read");
                    return Ok(new { userId = user.UserId, token = tokenResponse.AccessToken });
                }
            }

            return BadRequest(new { message = "Data loss has occured" });
        }
    }
}
