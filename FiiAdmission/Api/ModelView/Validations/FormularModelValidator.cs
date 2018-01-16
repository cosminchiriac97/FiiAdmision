using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
