using DiplomaApiApp.Models;
using Infrastructure.Interfaces.Services;
using Infrastructure.Models;
using Microsoft.AspNetCore.Mvc;

namespace DiplomaApiApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly ILogger<ProductsController> _logger;
        private readonly IProductService _productService;

        public ProductsController(ILogger<ProductsController> logger, IProductService productService)
        {
            _logger = logger;
            _productService = productService;
        }

        [HttpGet("id")]
        public ProductModel GetProduct([FromRoute] int id)
        {
            return _productService.GetById(id);
        }

        [HttpGet("pageIndex")]
        public IEnumerable<ProductModel> GetPage([FromRoute] int pageIndex, [FromBody] PageRequestModel pageModel)
        {
            return _productService.GetPage(pageIndex, pageModel.CategoryId, pageModel.DescSort);
        }
    }
}