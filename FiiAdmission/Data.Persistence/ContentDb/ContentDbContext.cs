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
        public DbSet<Candidate> Candidates { get; set; }
        public DbSet<Repartition> Repartitions { get; set; }
        public DbSet<Classroom> Classrooms { get; set; }
        public DbSet<AnswerToAdmissionForm> AnswerToAdmissionForms { get; set; }
    }
}
