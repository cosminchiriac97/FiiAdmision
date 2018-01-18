using FluentValidation;

namespace Api.ModelView.Validations
{
    public class FormularModelValidator : AbstractValidator<FormModel>
    {
        public FormularModelValidator()
        {
            RuleFor(st => st.Email).NotEmpty().WithMessage("Email cannot be empty!");       
        }
    }
}
