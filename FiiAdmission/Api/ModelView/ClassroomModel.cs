using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.ModelView.Validations;
using FluentValidation.Attributes;
using FluentValidation.Validators;

namespace Api.ModelView
{
    [Validator(typeof(ClassRoomModelValidator))]
    public class ClassroomModel
    {     
        public string Name { set; get; }
        public int Capacity { set; get; }
    }
}
