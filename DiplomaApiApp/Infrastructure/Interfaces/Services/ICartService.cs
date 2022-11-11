using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Models;

namespace Infrastructure.Interfaces.Services
{
    public interface ICartService
    {
        public List<ProductModel> GetCartByUserId(int userId);
        public void AddProductToCart(int cartId, int productId);
        public bool RemoveProductFromCart(int cartId, int productId);
    }
}
