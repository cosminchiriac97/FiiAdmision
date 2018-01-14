using Data.Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Persistence.RepartitionDb
{
   public class RepartitionDbContext: DbContext, IRepartitionDbContext
    {
        public RepartitionDbContext(DbContextOptions<RepartitionDbContext> options) : base((DbContextOptions) options)
        {

        }

        public DbSet<Repartition> Repartitions { get; set; }
    }
}
