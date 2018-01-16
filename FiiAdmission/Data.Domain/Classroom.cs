using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Data.Domain
{
    public class Classroom
    {
        [Key]
        public string Name { set; get; }
        public int Capacity { set; get; }
    }
}
