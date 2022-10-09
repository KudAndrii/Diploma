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
    public class CartService : ICartService
    {
        private readonly IUnitOfWork _unitOfWork;

        public CartService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public List<ProductModel> GetCartByUserId(int userId)
        {
            int cartId = _unitOfWork.CartRepository.GetCartIdByUserId(userId);

            if (cartId != -1)
            {
                return _unitOfWork.CartRepository.GetCartById(cartId);
            }
            else
            {
                return new List<ProductModel>();
            }
        }

        public void AddProductToCart(int cartId, int productId)
        {
            var entity = new ProductCartModel()
            {
                CartId = cartId,
                ProductId = productId
            };

            _unitOfWork.CartRepository.AddProductToCart(entity);

            _unitOfWork.Save();
        }

        public bool RemoveProductFromCart(int cartId, int productId)
        {
            var result = _unitOfWork.CartRepository.RemoveProductFromCart(cartId, productId);

            _unitOfWork.Save();

            return result;
        }
    }
}
