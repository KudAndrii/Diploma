using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Models;

namespace Infrastructure.Interfaces.Repositories
{
    public interface IProductRepository
    {
        public ProductModel GetById(int id);
        public IQueryable<ProductModel> GetProductsPage(int pageIndex);
    }
}
