using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.DbContexts;
using Infrastructure.Interfaces.Repositories;
using Infrastructure.Models;

namespace Infrastructure.Repositories.SQL
{
    public class SQLProductRepository : IProductRepository
    {
        private readonly SQLContext _db;

        public SQLProductRepository(SQLContext db)
        {
            _db = db;
        }

        public ProductModel GetById(int id)
        {
            var result = _db.Products.FirstOrDefault(p => p.ProductId == id);

            if (result == null)
            {
                throw new ArgumentNullException("Product not found.");
            }

            return result;
        }

        public IEnumerable<ProductModel> GetPage(int page, int count)
        {
            return _db.Products.Skip(page * count).Take(count).ToList();
        }
    }
}
