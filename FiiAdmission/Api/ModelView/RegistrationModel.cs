using Api.ModelView.Validations;
using FluentValidation.Attributes;


namespace Api.ModelView
{
    [Validator(typeof(RegistrationModelValidator))]
    public class RegistrationModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}