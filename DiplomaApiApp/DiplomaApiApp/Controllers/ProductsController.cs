using DiplomaApiApp.Models;
using Infrastructure.Interfaces.Services;
using Infrastructure.Models;
using Microsoft.AspNetCore.Mvc;

namespace DiplomaApiApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : Controller
    {
        private readonly ILogger<ProductsController> _logger;
        private readonly IProductService _productService;

        public ProductsController(ILogger<ProductsController> logger, IProductService productService)
        {
            _logger = logger;
            _productService = productService;
        }

        [HttpGet("{id}")]
        public ProductModel GetProduct(int id)
        {
            return _productService.GetById(id);
        }

        [HttpPost("Page")]
        public IEnumerable<ProductModel> GetPage([FromBody] PageRequestModel pageModel)
        {
            if (ModelState.IsValid)
            {
                return _productService.GetPage(pageModel.PageIndex, pageModel.CategoryId, pageModel.DescSort);
            }

            return new List<ProductModel>();
        }
    }
}
