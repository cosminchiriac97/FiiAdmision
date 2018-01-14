using Data.Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Data.Persistence.RepartitionDb
{
    public interface IRepartitionDbContext
    {
        DbSet<Repartition> Repartitions { get; set; }
        Task<int> SaveChangeAsync(CancellationToken cancellationToken = default(CancellationToken));
    }
}
