using System.ComponentModel.DataAnnotations;
using Infrastructure.Models;

namespace DiplomaApiApp.Models
{
    public class OrderRequestModel
    {
        [Required]
        public int UserId { get; set; }
        [Required]
        public List<ProductModel>? Products { get; set; }
    }
}
