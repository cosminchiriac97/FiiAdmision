using System;

namespace Data.Domain
{
    public class Candidate
    {
        public Guid FormId { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Subject { get; set; }
        public string School { get; set; }
        public Boolean IsAccepted { get; set; }
    }
}
