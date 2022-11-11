using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Models
{
    [Table("Users")]
    public class UserModel
    {
        public UserModel()
        {
            Orders = new List<OrderModel>();
        }

        public int UserId { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public CartModel Cart { get; set; }
        public List<OrderModel> Orders { get; set; }
    }
}
