using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Infrastructure.Models
{
    [Table("Carts")]
    public class CartModel
    {
        public CartModel()
        {
            ProductCarts = new List<ProductCartModel>();
        }

        public int CartId { get; set; }
        public int UserId { get; set; }
        public UserModel? User { get; set; }
        public List<ProductCartModel>? ProductCarts { get; set; }
    }
}
