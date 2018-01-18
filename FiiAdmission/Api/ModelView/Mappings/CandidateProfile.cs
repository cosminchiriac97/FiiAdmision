using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Data.Domain;

namespace Api.ModelView.Mappings
{
    public class CandidateProfile : Profile
    {
        public CandidateProfile()
        {
            CreateMap<ClassroomModel, Candidate>().ReverseMap();
        }
    }
}
