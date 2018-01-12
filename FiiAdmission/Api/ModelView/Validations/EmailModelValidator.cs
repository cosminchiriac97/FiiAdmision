
using FluentValidation;

namespace Api.ModelView.Validations
{
    public class EmailModelValidator : AbstractValidator<EmailModel>
    {
        public EmailModelValidator()
        {
            RuleFor(vm => vm.Email).NotEmpty().WithMessage("Email cannot be empty").EmailAddress().WithMessage("Invalid email address format");
        }
    }
}
