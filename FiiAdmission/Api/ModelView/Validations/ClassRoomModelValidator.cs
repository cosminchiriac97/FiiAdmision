using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;

namespace Api.ModelView.Validations
{
    public class ClassRoomModelValidator:AbstractValidator<ClassroomModel>
    {
        public ClassRoomModelValidator()
        {
            RuleFor(vm => vm.Name).NotEmpty().WithMessage("Classroom name cannot be empty");
            RuleFor(vm => vm.Capacity).NotEmpty().WithMessage("Capacity cannot be empty");
        }
    }
}
