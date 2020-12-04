using Coffee.Data;
using Coffee.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Coffee.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private ApplicationDbContext _context;

        public ProductController(ApplicationDbContext context)
        {
            this._context = context;
        }

        [HttpGet]
        public IEnumerable<Product> GetAllProduct()
        {
            if (_context.Products.Count()>0)
                return _context.Products.Include(item=>item.Categories).ToList();
            return new List<Product>();
        }

        [HttpGet("{id}")]
        public Product GetProductById(int id)
        {
            return _context.Products.First(item=>item.Id==id);
        }

        [HttpPost]
        public IActionResult AddProduct([FromBody] Product product)
        {
            if (ModelState.IsValid)
            {
                _context.Products.Add(product);
                _context.SaveChanges();
                return Ok(product);
            }
            return BadRequest(product);
        }

        public IActionResult UpdateProduct([FromBody] Product product)
        {
            if (ModelState.IsValid)
            {
                _context.Products.Update(product);
                _context.SaveChanges();
                return Ok(product);
            }
            return BadRequest(product);
        }

        [HttpDelete("{id}")]
        public void DeleteProduct(int id)
        {
            var product = _context.Products.First(item => item.Id == id);
            _context.Products.Remove(product);
        }
    }
}
