using System;
using System.Security.Cryptography.X509Certificates;
using AutoMapper;
using Data.Domain;

namespace Api.ModelView.Mappings
{
    public class CreationAnnouncementProfile : Profile
    {
        public CreationAnnouncementProfile()
        {
            CreateMap<AnnouncementModel, Announcement>().ReverseMap();
        }
    }
}
