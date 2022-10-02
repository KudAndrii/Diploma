using Infrastructure.Interfaces.Services;
using Infrastructure.Models;
using Microsoft.AspNetCore.Mvc;

namespace DiplomaApiApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CategoriesController : Controller
    {
        private readonly ILogger<ProductsController> _logger;
        private readonly ICategoryService _categoryService;

        public CategoriesController(ILogger<ProductsController> logger, ICategoryService categoryService)
        {
            _logger = logger;
            _categoryService = categoryService;
        }

        [HttpGet]
        public IEnumerable<CategoryModel> GetAll()
        {
            return _categoryService.GetAll();
        }
    }
}
