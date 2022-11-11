namespace DiplomaApiApp.Models
{
    public class ProductResponseModel
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Img { get; set; }
        public int CategoryId { get; set; }
        public double Price { get; set; }
        public string OS { get; set; }

        public string Processor { get; set; }
    }
}
