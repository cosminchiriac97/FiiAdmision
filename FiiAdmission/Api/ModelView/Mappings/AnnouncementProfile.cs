using AutoMapper;
using Data.Domain;

namespace Api.ModelView.Mappings
{
    public class AnnouncementProfile : Profile
    {
        public AnnouncementProfile()
        {
            CreateMap<AnnouncementModel, Announcement>();
        }
    }
}
