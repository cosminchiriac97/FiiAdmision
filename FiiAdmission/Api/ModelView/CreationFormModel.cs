using Api.ModelView.Validations;
using FluentValidation.Attributes;
using Newtonsoft.Json.Linq;

namespace Api.ModelView
{
    [Validator(typeof(FormularModelValidator))]
    public class CreationFormModel
    {
        public string Email { get; set; }
        public JObject BlobObject { set; get; }
    }
}