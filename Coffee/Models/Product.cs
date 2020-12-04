using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coffee.Models
{
    public class Product
    {
        public int Id { get; set; }
        public int BrandId { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public string Image { get; set; }
        
        public List<Category> Categories { get; set; }
    }
}
