using AutoMapper;
using Data.Domain;

namespace Api.ModelView.Mappings
{
    public class AddAnnouncementProfile : Profile
    {
        public AddAnnouncementProfile()
        {
            CreateMap<AddAnnouncementModel, Announcement>().ReverseMap();
        }
    }
}
