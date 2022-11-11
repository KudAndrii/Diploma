using AutoMapper;
using DiplomaApiApp.Models;
using Infrastructure.Interfaces.Services;
using Infrastructure.Models;
using Microsoft.AspNetCore.Mvc;

namespace DiplomaApiApp.Controllers
{
    [ApiController]
    [Route("products")]
    public class ProductsController : Controller
    {
        private readonly ILogger<ProductsController> _logger;
        private readonly IProductService _productService;
        private readonly IMapper _mapper;

        public ProductsController(ILogger<ProductsController> logger, IMapper mapper, IProductService productService)
        {
            _logger = logger;
            _mapper = mapper;
            _productService = productService;
        }

        [HttpGet("{id}")]
        public ProductResponseModel GetProduct(int id)
        {
            var product = _productService.GetById(id);
            var result = _mapper.Map<ProductResponseModel>(product);

            return result;
        }

        [HttpPost("page")]
        public IEnumerable<ProductResponseModel> GetProducts([FromBody] PageRequestModel pageModel)
        {
            if (ModelState.IsValid)
            {
                var products = _productService.GetProductsPage(pageModel.PageIndex, pageModel.CategoryId, pageModel.DescSort);
                var result = new List<ProductResponseModel>(products.Count);
                foreach (var product in products)
                {
                    result.Add(_mapper.Map<ProductModel, ProductResponseModel>(product));
                }

                return result;
            }

            return new List<ProductResponseModel>();
        }
    }
}
