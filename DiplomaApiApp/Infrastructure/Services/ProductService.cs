using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Interfaces;
using Infrastructure.Interfaces.Services;
using Infrastructure.Models;

namespace Infrastructure.Services
{
    public class ProductService : IProductService
    {
        private readonly IUnitOfWork _unitOfWork;

        public ProductService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public ProductModel GetById(int id)
        {
            var result = _unitOfWork.ProductRepository.GetById(id);

            if (result == null)
            {
                throw new ArgumentNullException("Product not found.");
            }

            return result;
        }

        public IEnumerable<ProductModel> GetPage(int pageIndex, int? categoryId = null, bool descSort = false)
        {
            var products = _unitOfWork.ProductRepository.GetPage(pageIndex);

            if (categoryId != null)
            {
                products.Where(p => p.CategoryId == categoryId);
            }

            if (descSort == true)
            {
                products.OrderByDescending(p => p.Price);
            }
            else
            {
                products.OrderBy(p => p.Price);
            }

            return products.ToList();
        }
    }
}
