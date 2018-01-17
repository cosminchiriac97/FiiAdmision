using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Data.Domain;

namespace Api.ModelView.Mappings
{
    public class RepartitionConfigurationProfile : Profile
    {
        public RepartitionConfigurationProfile()
        {
            CreateMap<RepartitionConfigurationModel, RepartitionConfiguration>().ReverseMap();
        }
    }
}
