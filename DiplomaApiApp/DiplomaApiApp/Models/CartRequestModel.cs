using System.ComponentModel.DataAnnotations;

namespace DiplomaApiApp.Models
{
    public class CartRequestModel
    {
        [Required]
        [Range(0, int.MaxValue)]
        public int UserId { get; set; }
        [Required]
        [Range(0, int.MaxValue)]
        public int ProductId { get; set; }
    }
}
