using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Models
{
    public class OrderModel
    {
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public int UserId { get; set; }
        public DateTime OrderDate { get; set; }
        public ProductModel? Product { get; set; }
        public UserModel? User { get; set; }
    }
}
