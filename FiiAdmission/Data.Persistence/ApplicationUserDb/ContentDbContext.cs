using System;
using System.Collections.Generic;
using System.Text;
using Data.Domain;
using Microsoft.EntityFrameworkCore;

namespace Data.Persistence.ApplicationUserDb
{
    public class ContentDbContext : DbContext, IContentDbContext
    {
        public ContentDbContext(DbContextOptions<ContentDbContext> options) : base(options)
        {
        }

        public DbSet<Announcement> Announcements { get; set;}

    }
}
