using System.ComponentModel.DataAnnotations;

namespace DiplomaApiApp.Models
{
    public class LoginRequestModel
    {
        [Required]
        public string? Login { get; set; }
        [Required]
        public string? Password { get; set; }
    }
}
