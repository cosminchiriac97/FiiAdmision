using System;


namespace Data.Domain
{
    public class JobSeeker
    {
        public Guid Id { get; set; }
        public string IdentityId { get; set; }
        public AppUser Identity { get; set; }  
      
    }
}
