using Api.ModelView.Validations;
using FluentValidation.Attributes;

namespace Api.ModelView
{
    [Validator(typeof(EmailModelValidator))]
    public class EmailModel
    {
        public string Email { get; set; }
    }
}