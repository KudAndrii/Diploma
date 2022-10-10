using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Models
{
    [Table("Categories")]
    public class CategoryModel
    {
        public CategoryModel()
        {
            Products = new List<ProductModel>();
        }

        public int CategoryId { get; set; }
        public string Name { get; set; }
        public string Img { get; set; }
        public List<ProductModel> Products { get; set; }
    }
}
