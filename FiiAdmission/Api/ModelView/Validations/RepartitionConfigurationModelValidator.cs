using System;
using FluentValidation;

namespace Api.ModelView.Validations
{
    public class RepartitionConfigurationModelValidator : AbstractValidator<RepartitionConfigurationModel>
    {
        public RepartitionConfigurationModelValidator()
        {
            RuleFor(vm => vm.ExamTime).NotEmpty().WithMessage("Exam time cannot be empty");
            RuleFor(vm => vm.ExamTime).GreaterThan(DateTime.Now).WithMessage("You cannot set the date in the past");
        }
    }
}
