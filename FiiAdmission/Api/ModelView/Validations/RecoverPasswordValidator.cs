using FluentValidation;

namespace Api.ModelView.Validations
{
    public class RecoverPasswordValidator : AbstractValidator<RecoverPasswordModel>
    {
        public RecoverPasswordValidator()
        {
            RuleFor(vm => vm.Email).NotEmpty().WithMessage("Email cannot be empty.").EmailAddress()
                .WithMessage("Invalid email address format");
            RuleFor(vm => vm.Password).NotEmpty().WithMessage("Please add a new password").MinimumLength(6).WithMessage("Password length must be greater than 6 characters.");
            RuleFor(vm => vm.Code).NotEmpty().WithMessage("Code cannot be empty");
        }
    }
}
