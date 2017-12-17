using Api.ModelView.Validations;
using FluentValidation.Attributes;

namespace Api.ModelView
{
    [Validator(typeof(ResetPasswordValidator))]
    public class ResetPasswordModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string Code { get; set; }
    }
}