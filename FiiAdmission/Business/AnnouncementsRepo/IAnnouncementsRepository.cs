using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Data.Domain;

namespace Business.AnnouncementsRepo
{
    public interface IAnnouncementsRepository
    {
        Task<List<Announcement>> GetAll();
        Task<Announcement> GetById(Guid id);
        Task<Announcement> Add(Announcement announcement);
        Task<bool> Delete(Guid id);
        Task<bool> Edit(Announcement announcement);
    }
}
