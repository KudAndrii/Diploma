using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Models;

namespace Infrastructure.Interfaces
{
    public interface IProductRepository
    {
        public ProductModel GetById(int id);
        public IQueryable<ProductModel> GetPage(int page, int count);
        public IQueryable<ProductModel> GetByCategory(int categoryId);
    }
}
