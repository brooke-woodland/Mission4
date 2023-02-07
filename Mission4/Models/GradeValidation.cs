using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4.Models
{
    public class GradeValidation
    {
        [Required]
        [Range(0, 100, ErrorMessage = "Assignment grade must be between 0 and 100")]
        public int Assignment { get; set; }
        [Range(0, 100, ErrorMessage = "Group grade must be between 0 and 100")]
        public int Group { get; set; }
        [Range(0, 100, ErrorMessage = "Quiz grade must be between 0 and 100")]
        public int Quiz { get; set; }
        [Range(0, 100, ErrorMessage = "Midterm grade must be between 0 and 100")]
        public int Midterm { get; set; }
        [Range(0, 100, ErrorMessage = "Final grade must be between 0 and 100")]
        public int Final { get; set; }
        [Range(0, 100, ErrorMessage = "Intex grade must be between 0 and 100")]
        public int Intex { get; set; }
    }


}
