using AutoMapper;
using DiplomaApiApp.Models;
using Infrastructure.Interfaces.Services;
using Infrastructure.Models;
using Microsoft.AspNetCore.Mvc;

namespace DiplomaApiApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : Controller
    {
        private readonly ILogger<OrderController> _logger;
        private readonly IMapper _mapper;
        private readonly IOrderService _orderService;

        public OrderController(ILogger<OrderController> logger, IMapper mappre, IOrderService orderService)
        {
            _logger = logger;
            _mapper = mappre;
            _orderService = orderService;
        }

        [HttpGet("{userId}")]
        public IEnumerable<OrderResponseModel> GetHistory(int userId)
        {
            var history = _orderService.GetOrderHistoryByUserId(userId);
            var result = new List<OrderResponseModel>(history.Count);
            foreach (var order in history)
            {
                result.Add(new OrderResponseModel()
                {
                    Product = _mapper.Map<ProductResponseModel>(order.Product),
                    OrderDate = order.OrderDate
                });
            }

            return result;
        }

        [HttpPost("Create")]
        public IActionResult Order([FromBody] OrderRequestModel order)
        {
            if (ModelState.IsValid)
            {
                var productIds = order.Products?.Select(p => p.ProductId).ToList();
                var result = _orderService.CreateOrder(order.UserId, productIds!);

                if (result == true)
                {
                    return Ok(new { message = result });
                }
                else
                {
                    return BadRequest(new { message = result });
                }
            }

            return BadRequest();
        }
    }
}
