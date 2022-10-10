using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Models
{
    [Table("ProductCarts")]
    public class ProductCartModel
    {
        public int ProductCartId { get; set; }
        public int ProductId { get; set; }
        public int CartId { get; set; }
        public ProductModel Product { get; set; }
        public CartModel Cart { get; set; }
    }
}
