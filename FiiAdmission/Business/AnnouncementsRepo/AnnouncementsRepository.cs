using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Data.Domain;
using Data.Persistence.ContentDb;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Business.AnnouncementsRepo
{
    public class AnnouncementsRepository : IAnnouncementsRepository
    {
        private readonly IContentDbContext _databaseContext;
        private readonly ILogger _logger;
        public AnnouncementsRepository(IContentDbContext databaseContext, ILoggerFactory loggerFactory)
        {
            _databaseContext = databaseContext;
            _logger = loggerFactory.CreateLogger("AnnouncementsRepository");
        }

        public async Task<Announcement> Add(Announcement announcement)
        {
            _databaseContext.Announcements.Add(announcement);
            try
            {
                await _databaseContext.SaveChangesAsync();
            }
            catch (Exception exp)
            {
                _logger.LogError($"Error in {nameof(Add)}: " + exp.Message);
            }

            return announcement;
        }

        public async Task<bool> Delete(Guid id)
        {
            _databaseContext.Announcements.Remove(await GetById(id));
            try
            {
                return await _databaseContext.SaveChangesAsync() > 0;
            }
            catch (Exception exp)
            {
                _logger.LogError($"Error in {nameof(Delete)}: " + exp.Message);
            }
            return false;
        }

        public async Task<bool> Edit(Announcement announcement)
        {
            _databaseContext.Announcements.Update(announcement);
            try
            {
                return await _databaseContext.SaveChangesAsync()>0;
            }
            catch (Exception exp)
            {
                _logger.LogError($"Error in {nameof(Edit)}: " + exp.Message);
            }
            return false;
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