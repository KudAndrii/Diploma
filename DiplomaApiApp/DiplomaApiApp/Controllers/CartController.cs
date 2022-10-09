using AutoMapper;
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
        private readonly IMapper _mapper;

        public CartController(ILogger<CartController> logger, ICartService cartService, IMapper mapper)
        {
            _logger = logger;
            _cartService = cartService;
            _mapper = mapper;
        }

        [HttpGet("{userId}")]
        public IEnumerable<ProductResponseModel> Get(int userId)
        {
            var cart = _cartService.GetCartByUserId(userId);
            var result = new List<ProductResponseModel>(cart.Count);
            foreach (var product in cart)
            {
                result.Add(_mapper.Map<ProductModel, ProductResponseModel>(product));
            }

            return result;
        }

        [HttpPut("AddProduct")]
        public IActionResult AddProduct([FromBody] CartRequestModel model)
        {
            if (ModelState.IsValid)
            {
                _cartService.AddProductToCart(model.UserId, model.ProductId);

                return Ok(new { message = true });
            }

            return BadRequest(new { message = false });
        }

        [HttpDelete("RemoveProduct")]
        public IActionResult RemoveProduct([FromBody] CartRequestModel model)
        {
            var result = false;

            if (ModelState.IsValid)
            {
                result = _cartService.RemoveProductFromCart(model.UserId, model.ProductId);

                return Ok(new { message = result });
            }

            return BadRequest(new { message = result });
        }
    }
}
