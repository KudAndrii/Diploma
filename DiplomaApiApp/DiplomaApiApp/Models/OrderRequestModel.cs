using System.ComponentModel.DataAnnotations;
using Infrastructure.Models;

namespace DiplomaApiApp.Models
{
    public class OrderRequestModel
    {
        [Required]
        public int UserId { get; set; }
        [Required]
        public List<int>? ProductIds { get; set; }
    }
}
