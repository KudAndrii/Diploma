using System.ComponentModel.DataAnnotations;

namespace DiplomaApiApp.Models
{
    public class PageRequestModel
    {
        [Required]
        public int CategoryId { get; set; }
        [Required]
        public bool DescSort { get; set; }
    }
}
