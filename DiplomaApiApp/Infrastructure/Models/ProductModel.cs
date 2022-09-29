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
        public string? CategoryId { get; set; }
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
    }
}
