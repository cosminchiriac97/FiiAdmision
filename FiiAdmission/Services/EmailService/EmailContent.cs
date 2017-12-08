using System;
using System.Collections.Generic;
using System.Text;

namespace Services.EmailService
{
    public class EmailContent
    {
        public string Subject { get; set; }
        public string EmailAdress { get; set; }
        public string TextBody { get; set; }   
    }
}
