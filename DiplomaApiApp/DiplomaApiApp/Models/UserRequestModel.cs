using System.ComponentModel.DataAnnotations;

namespace DiplomaApiApp.Models
{
    public class UserRequestModel
    {
        [Required]
        public string? Login { get; set; }
        [Required]
        public string? Password { get; set; }
    }
}
