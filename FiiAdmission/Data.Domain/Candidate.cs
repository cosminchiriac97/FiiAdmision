using System;
using System.ComponentModel.DataAnnotations;

namespace Data.Domain
{
    public class Candidate
    {
        [Key]
        public string Email { get; set; }
        public Guid FormId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Subject { get; set; }
        public string School { get; set; }
        public Boolean IsAccepted { get; set; }
    }
}
