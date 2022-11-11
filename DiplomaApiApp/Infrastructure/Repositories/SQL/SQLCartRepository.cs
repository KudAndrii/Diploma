using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.DbContexts;
using Infrastructure.Interfaces.Repositories;
using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories.SQL
{
    public class SQLCartRepository : ICartRepository
    {
        private readonly SQLContext _db;

        public SQLCartRepository(SQLContext db)
        {
            _db = db;
        }

        public int GetCartIdByUserId(int userId)
        {
            int result = -1;
            var cart = _db.Carts.FirstOrDefault(c => c.UserId == userId);

            if (cart != null)
            {
                result = cart.CartId;
            }

            return result;
        }

        public List<ProductModel> GetCartById(int cartId)
        {
            List<ProductModel> result = _db.ProductCarts.Include(x => x.Product).Where(x => x.CartId == cartId).Select(x => x.Product).ToList() !;

            return result;
        }

        public void AddProductToCart(ProductCartModel model)
        {
            _db.ProductCarts.Add(model);
        }

        public bool RemoveProductFromCart(int cartId, int productId)
        {
            bool result = false;

            var entity = _db.ProductCarts.FirstOrDefault(x => x.CartId == cartId && x.ProductId == productId);

            if (entity != null)
            {
                _db.ProductCarts.Remove(entity);
                result = true;
            }

            return result;
        }
    }
}
