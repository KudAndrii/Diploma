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
        public int ProductId { get; set; }
        public string? Name { get; set; }
        public string? Img { get; set; }
        public int CategoryId { get; set; }
        public CategoryModel? Category { get; set; }
        public double Price { get; set; }
        public string ShortDescription
        {
            get
            {
                if (ShortDescription == null)
                {
                    return Description!.Substring(0, 50);
                }
                else
                {
                    return ShortDescription;
                }
            }
            set
            {
                ShortDescription = value;
            }
        }

        public string? Description { get; set; }

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
