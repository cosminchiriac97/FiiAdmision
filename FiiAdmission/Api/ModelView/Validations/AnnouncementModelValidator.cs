using FluentValidation;

namespace Api.ModelView.Validations
{
    public class AnnouncementModelValidator : AbstractValidator<AnnouncementModel>
    {
        public AnnouncementModelValidator()
        {
            
            RuleFor(vm => vm.AdminId).NotEmpty().WithMessage("AdminId cannot be empty");
            RuleFor(vm => vm.Body).NotEmpty().WithMessage("Body cannot be empty");
            RuleFor(vm => vm.Title).NotEmpty().WithMessage("Title cannot be empty");
            RuleFor(vm => vm.PublishDate).NotEmpty().WithMessage("PublishDate cannot be empty");
            RuleFor(vm => vm.Title).Length(1, 12).WithMessage("Title must be between 1 and 12 characters");
            
        }
    }
}
