using System;
using System.Collections.Generic;
using Api.ModelView.Validations;
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
