using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Data.Domain;

namespace Business.AnnouncementsRepo
{
    public interface IAnnouncementsRepository
    {
        Task<List<Announcement>> GetAll();
        Task<Announcement> GetById(Guid id);
        Task Add(Announcement announcement);
        Task Delete(Guid id);
        Task Edit(Announcement announcement);
    }
}
