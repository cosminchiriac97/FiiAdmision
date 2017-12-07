using Data.Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Data.Persistence.ApplicationUserDb
{
    public class ApplicationUserDbContext :  IdentityDbContext, IApplicationUserDbContext
    {
        public ApplicationUserDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<JobSeeker> JobSeekers { get; set; }
       
    }
}
