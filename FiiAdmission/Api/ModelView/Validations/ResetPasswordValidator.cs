using FluentValidation;

namespace Api.ModelView.Validations
{
    public class ResetPasswordValidator : AbstractValidator<ResetPasswordModel>
    {
        public ResetPasswordValidator()
        {
            RuleFor(vm => vm.Email).NotEmpty().WithMessage("Email cannot be empty.").EmailAddress()
                .WithMessage("Invalid email address format");
            RuleFor(vm => vm.Password).NotEmpty().WithMessage("Please add a new password");
            RuleFor(vm => vm.ConfirmPassword).NotEmpty().WithMessage("Please confirm your password")
                .Equal(vm => vm.Password).WithMessage("Passwords do not match");
            RuleFor(vm => vm.Code).NotEmpty().WithMessage("Code cannot be empty");
        }
    }
}
