using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Data.Domain;
using SmtpClient = System.Net.Mail.SmtpClient;

namespace Business.EmailServices
{
    public  class EmailSender : IEmailSender
    {
        public async Task SendEmail(Email emailContent)
        {
            using (var emailMessage = new MailMessage {From = new MailAddress("noreply.fiiadmission@gmail.com")})
            {
                emailMessage.To.Add(new MailAddress(emailContent.EmailAdress));

                emailMessage.Subject = emailContent.Subject;
                emailMessage.Body = emailContent.TextBody;
                emailMessage.IsBodyHtml = true;
                using (var client = new SmtpClient())
                {
                    var credentials = new NetworkCredential
                    {
                        UserName = "noreply.fiiadmission@gmail.com",
                        Password = "2d0380fvo"
                    };
                    client.Host = "smtp.gmail.com";
                    client.Port = 587;
                    client.EnableSsl = true;
                    client.UseDefaultCredentials = false;
                    client.Credentials = credentials;
                    client.DeliveryMethod = SmtpDeliveryMethod.Network;
                    await client.SendMailAsync(emailMessage);
                }
}
        }
    }
}
