using System.Threading;
using System.Threading.Tasks;
using Data.Domain;
using Microsoft.EntityFrameworkCore;

namespace Data.Persistence.ApplicationUserDb
{
    public interface IContentDbContext
    {
        DbSet<Announcement> Announcements  { get; set; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken));
    }
}
