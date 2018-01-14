using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Data.Domain
{
    public class AnswerToAdmissionForm
    {
        [Key]
        public string Email { get; set; }
        public string Status { get; set; }
        public string Reason { get; set; }
    }
}
