using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Models;

namespace Infrastructure.Interfaces.Repositories
{
    public interface ICartRepository
    {
        public List<ProductModel> GetCartById(int cartId);
        public void AddProductToCart(int cartId, int productId);
        public bool RemoveProductFromCart(int cartId, int productId);
    }
}
