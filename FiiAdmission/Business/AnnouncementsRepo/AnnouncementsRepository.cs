using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Data.Domain;
using Data.Persistence.ContentDb;
using Microsoft.EntityFrameworkCore;

namespace Business.AnnouncementsRepo
{
    public class AnnouncementsRepository : IAnnouncementsRepository
    {
        private readonly IContentDbContext _databaseContext;

        public AnnouncementsRepository(IContentDbContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public async Task Add(Announcement announcement)
        {
            _databaseContext.Announcements.Add(announcement);
            await _databaseContext.SaveChangesAsync();
        }

        public async Task Delete(Guid id)
        {
            _databaseContext.Announcements.Remove(await GetById(id));
            await _databaseContext.SaveChangesAsync();
        }

        public async Task Edit(Announcement announcement)
        {
            _databaseContext.Announcements.Update(announcement);
            await _databaseContext.SaveChangesAsync();
        }

        public async Task<List<Announcement>> GetAll()
        {
            return await _databaseContext.Announcements.ToListAsync();
        }

        public async Task<Announcement> GetById(Guid id)
        {
            return await _databaseContext.Announcements.SingleOrDefaultAsync(x => x.Id == id);
        }
    }
}