using Api.ModelView.Validations;
using FluentValidation.Attributes;

namespace Api.ModelView
{
    [Validator(typeof(ResetPasswordValidator))]
    public class ResetPasswordModel
    {
        public string CurrentPassword { get; set; }
        public string Password { get; set; }
    }
}