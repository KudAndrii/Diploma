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

        public List<ProductModel> GetProductsPage(int pageIndex, int categoryId, bool descSort)
        {
            var products = _unitOfWork.ProductRepository.GetProductsPage(pageIndex, categoryId);

            if (descSort == true)
            {
                products = products.OrderByDescending(p => p.Price);
            }
            else
            {
                products = products.OrderBy(p => p.Price);
            }

            var result = products.ToList();
            return result;
        }
    }
}
