using Microsoft.AspNetCore.Mvc;
using Mission4.Models;

namespace Mission4.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult GradeCalculator()
        {
            return View();
        }
        [HttpPost]

        public IActionResult Calculator(GradeValidation model)

        { 
            return View();

        }
    }


}
