using DiplomaApiApp.Models;
using Infrastructure.Interfaces.Services;
using Infrastructure.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace DiplomaApiApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CartController : Controller
    {
        private readonly ILogger<CartController> _logger;
        private readonly ICartService _cartService;

        public CartController(ILogger<CartController> logger, ICartService cartService)
        {
            _logger = logger;
            _cartService = cartService;
        }

        [HttpGet("{userId}")]
        public IEnumerable<ProductModel> Get(int userId)
        {
            return _cartService.GetCartByUserId(userId);
        }

        [HttpPut("AddProduct")]
        public IActionResult AddProduct([FromBody] CartRequestModel model)
        {
            if (ModelState.IsValid)
            {
                _cartService.AddProductToCart(model.UserId, model.ProductId);

                return Ok(true);
            }

            return BadRequest(false);
        }

        [HttpDelete("RemoveProduct")]
        public IActionResult RemoveProduct([FromBody] CartRequestModel model)
        {
            var result = false;

            if (ModelState.IsValid)
            {
                result = _cartService.RemoveProductFromCart(model.UserId, model.ProductId);

                return Ok(result);
            }

            return BadRequest(result);
        }
    }
}
