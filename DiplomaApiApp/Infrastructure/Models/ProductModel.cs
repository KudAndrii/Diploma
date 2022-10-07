using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Models
{
    [Table("Products")]
    public class ProductModel
    {
        public ProductModel()
        {
            ProductCarts = new List<ProductCartModel>();
        }

        public int ProductId { get; set; }
        public string? Name { get; set; }
        public string? Img { get; set; }
        public int CategoryId { get; set; }
        public CategoryModel? Category { get; set; }
        public List<ProductCartModel>? ProductCarts { get; set; }
        public double Price { get; set; }
        public string? OS { get; set; }

        public string? Processor { get; set; }

        public override bool Equals(object? obj)
        {
            bool result = false;
            ProductModel? prod;

            if (obj is ProductModel)
            {
                prod = obj as ProductModel;
                result = ProductId == prod?.ProductId ? true : false;
                result = Name == prod?.Name ? true : false;
            }

            return result;
        }
    }
}
