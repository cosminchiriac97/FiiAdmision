using FluentValidation;

namespace Api.ModelView.Validations
{
    public class ResetPasswordValidator : AbstractValidator<ResetPasswordModel>
    {
        public ResetPasswordValidator()
        {
            RuleFor(vm => vm.CurrentPassword).NotEmpty().WithMessage("Current password cannot be empty.");
            RuleFor(vm => vm.Password).NotEmpty().WithMessage("Password cannot be empty.").MinimumLength(6)
                .WithMessage("Password length must be greater than 6 characters");
        }
    }
}