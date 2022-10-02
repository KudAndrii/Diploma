using Infrastructure.Interfaces.Services;
using Infrastructure.Models;
using Microsoft.AspNetCore.Mvc;

namespace DiplomaApiApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CartController : Controller
    {
        private readonly ILogger<ProductsController> _logger;
        private readonly ICartService _cartService;

        public CartController(ILogger<ProductsController> logger, ICartService cartService)
        {
            _logger = logger;
            _cartService = cartService;
        }

        [HttpGet("userId")]
        public IEnumerable<ProductModel> Get([FromRoute] int userId)
        {
            return _cartService.GetProductsFromCartByUserId(userId);
        }
    }
}
