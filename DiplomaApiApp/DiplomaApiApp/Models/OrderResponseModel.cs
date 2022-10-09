namespace DiplomaApiApp.Models
{
    public class OrderResponseModel
    {
        public ProductResponseModel? Product { get; set; }
        public DateTime OrderDate { get; set; }
    }
}
