using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation.Attributes;
using Prezentation.ModelView.Validations;

namespace Prezentation.ModelView
{
    [Validator(typeof(CredentialsModelValidator))]
    public class CredentialsViewModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
