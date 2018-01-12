using System.Collections.Generic;

namespace Api.ModelView
{
    public class SimpleUserModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public bool EmailIsConfirmed { get; set; }
    }
}
