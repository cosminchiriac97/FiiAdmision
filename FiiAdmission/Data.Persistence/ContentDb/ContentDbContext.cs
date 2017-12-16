using Data.Domain;
using Microsoft.EntityFrameworkCore;

namespace Data.Persistence.ContentDb
{
    public class ContentDbContext : DbContext, IContentDbContext
    {
        public ContentDbContext(DbContextOptions<ContentDbContext> options) : base((DbContextOptions) options)
        {
        }

        public DbSet<Announcement> Announcements { get; set;}

    }
}
