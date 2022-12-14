using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Models;

namespace Infrastructure.Interfaces.Services
{
    public interface IProductService
    {
        public ProductModel GetById(int id);
        public List<ProductModel> GetProductsPage(int pageIndex, int categoryId, bool descSort);
    }
}
