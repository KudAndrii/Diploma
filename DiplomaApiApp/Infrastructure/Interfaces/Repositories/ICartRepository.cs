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
        /// <summary>
        /// Method returns cartId by given userId.
        /// </summary>
        /// <param name="userId">Given userId.</param>
        /// <returns>cartId.</returns>
        public int GetCartIdByUserId(int userId);

        /// <summary>
        /// Method returns list of products by given cartId.
        /// </summary>
        /// <param name="cartId">Given cartId.</param>
        /// <returns>List of products from cart.</returns>
        public List<ProductModel> GetCartById(int cartId);

        /// <summary>
        /// Method adds given ProductCart entity to db.
        /// </summary>
        /// <param name="model">Given ProductCart entity.</param>
        public void AddProductToCart(ProductCartModel model);

        /// <summary>
        /// Method removes product by given productId from cart.
        /// </summary>
        /// <param name="cartId">Given cart parameter.</param>
        /// <param name="productId">Given productId.</param>
        /// <returns>true - if product added, false - if not.</returns>
        public bool RemoveProductFromCart(int cartId, int productId);
    }
}
