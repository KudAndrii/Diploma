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
        private int _limit = 6;

        public SQLProductRepository(SQLContext db)
        {
            _db = db;
        }

        public ProductModel GetById(int id) => _db.Products.FirstOrDefault(p => p.ProductId == id) !;

        public IQueryable<ProductModel> GetProductsPage(int pageIndex, int categoryId)
        {
            IQueryable<ProductModel> result;

            if (categoryId == -1)
            {
                result = _db.Products.Skip((pageIndex - 1) * _limit).Take(_limit).AsQueryable();
            }
            else
            {
                result = _db.Products.Where(p => p.CategoryId == categoryId).Skip((pageIndex - 1) * _limit).Take(_limit).AsQueryable();
            }

            return result;
        }
    }
}
