using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.ModelView.Validations
{
    public class FormularModelValidator : AbstractValidator<CreationFormModel>
    {
        public FormularModelValidator()
        {
            RuleFor(st => st.BlobObject).NotEmpty().WithMessage("BlobObject cannot be empty!");
            RuleFor(st => st.Email).NotEmpty().WithMessage("Email cannot be empty!");
           
        }
    }
}
