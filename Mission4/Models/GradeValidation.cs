using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4.Models
{
    public class GradeValidation
    {
        [Required]
        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public int Assignment { get; set; }
        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public int Group { get; set; }
        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public int Quiz { get; set; }
        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public int Midterm { get; set; }
        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public int Final { get; set; }
        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public int Intex { get; set; }
    }


}
