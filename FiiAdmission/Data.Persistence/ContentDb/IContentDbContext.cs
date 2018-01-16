using System;
using System.Threading;
using System.Threading.Tasks;
using Data.Domain;
using Microsoft.EntityFrameworkCore;

namespace Data.Persistence.ContentDb
{
    public interface IContentDbContext
    {
        DbSet<Announcement> Announcements  { get; set; }
        DbSet<Candidate> Candidates { get; set; }
        DbSet<AnswerToAdmissionForm> AnswerToAdmissionForms { get; set; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken));
     
    }
}
