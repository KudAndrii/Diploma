using AutoMapper;
using DiplomaApiApp.Models;
using Infrastructure.Interfaces.Services;
using Infrastructure.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DiplomaApiApp.Controllers
{
    [ApiController]
    [Route("orders")]
    [Authorize]
    public class OrdersController : Controller
    {
        private readonly ILogger<OrdersController> _logger;
        private readonly IMapper _mapper;
        private readonly IOrderService _orderService;

        public OrdersController(ILogger<OrdersController> logger, IMapper mappre, IOrderService orderService)
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

        [HttpPost]
        public IActionResult Order([FromBody] OrderRequestModel order)
        {
            if (ModelState.IsValid)
            {
                var result = _orderService.CreateOrder(order.UserId, order.ProductIds!);

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
