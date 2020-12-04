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
    public class BrandController : ControllerBase
    {
        private ApplicationDbContext _context;

        public BrandController(ApplicationDbContext context)
        {
            this._context = context;
        }

        [HttpGet]
        public IEnumerable<Brand> GetAllBrands()
        {
            if (_context.Products.Count()>0)
                return _context.Brands.ToList();
            return new List<Brand>();
        }

        [HttpGet("{id}")]
        public Brand GetBrandById(int id)
        {
            return _context.Brands.First(item=>item.Id==id);
        }

        [HttpPost]
        public IActionResult AddBrand([FromBody] Brand brand)
        {
            if (ModelState.IsValid)
            {
                _context.Brands.Add(brand);
                _context.SaveChanges();
                return Ok(brand);
            }
            return BadRequest(brand);
        }

        public IActionResult UpdateBrand([FromBody] Brand brand)
        {
            if (ModelState.IsValid)
            {
                _context.Brands.Update(brand);
                _context.SaveChanges();
                return Ok(brand);
            }
            return BadRequest(brand);
        }

        [HttpDelete("{id}")]
        public void DeleteBrand(int id)
        {
            var brand = _context.Brands.First(item => item.Id == id);
            _context.Brands.Remove(brand);
        }
    }
}
