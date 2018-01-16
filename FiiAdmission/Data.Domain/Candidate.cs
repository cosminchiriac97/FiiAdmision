using System;
using System.ComponentModel.DataAnnotations;

namespace Data.Domain
{
    public class Candidate
    {
        [Key]
        public string Email { get; set; }
        public string CNP { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Subject { get; set; }
        public string School { get; set; }
        public string Status { get; set; }
    }
}
