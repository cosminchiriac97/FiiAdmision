using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.ModelView.Validations;
using Data.Domain;
using FluentValidation.Attributes;

namespace Api.ModelView
{
    [Validator(typeof(RepartitionConfigurationModelValidator))]
    public class RepartitionConfigurationModel
    {
        public List<ClassroomModel> AvailableClassrooms { get; set; }
        public DateTime ExamTime { get; set; }
    }
}
