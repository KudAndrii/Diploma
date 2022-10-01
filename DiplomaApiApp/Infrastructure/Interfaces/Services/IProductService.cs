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
        public IEnumerable<ProductModel> GetPage(int pageIndex, int? categoryId = null, bool descSort = false);
    }
}
