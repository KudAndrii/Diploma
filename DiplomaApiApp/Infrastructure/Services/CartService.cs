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

        public IEnumerable<ProductModel> GetCartByUserId(int userId)
        {
            var result = _unitOfWork.CartRepository.GetCartByUserId(userId);

            if (result == null)
            {
                throw new ArgumentNullException("Cart nor found.");
            }

            return result;
        }
    }
    }
}
