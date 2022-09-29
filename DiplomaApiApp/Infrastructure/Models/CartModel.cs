using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Models
{
    [Table("Carts")]
    public class CartModel
    {
        public CartModel()
        {
            Products = new List<ProductModel>();
        }

        public int CartId { get; set; }
        public int UserId { get; set; }
        public UserModel? User { get; set; }
        public List<ProductModel> Products { get; set; }
    }
}
