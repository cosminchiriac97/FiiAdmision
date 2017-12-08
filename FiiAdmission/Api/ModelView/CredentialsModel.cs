using Api.ModelView.Validations;
using FluentValidation.Attributes;

namespace Api.ModelView
{
    [Validator(typeof(CredentialsModelValidator))]
    public class CredentialsViewModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
