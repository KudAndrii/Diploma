using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Product
    {
        public int ProductId { get; set; }
        public string? Name { get; set; }
        public string? Img { get; set; }
        public string? Category { get; set; }
        public double Price { get; set; }
        public string? ShortDescription { get; set; }
        public string? Description { get; set; }
    }
}
