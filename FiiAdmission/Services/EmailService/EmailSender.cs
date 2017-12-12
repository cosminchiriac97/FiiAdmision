using System.Net;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MimeKit;

namespace Services.EmailService
{
    public  class EmailSender : IEmailSender
    {
        public async Task SendEmail(EmailContent emailContent)
        {
            var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress("noreply.fiiadmission@gmail.com"));

            emailMessage.To.Add(new MailboxAddress(emailContent.EmailAdress));

            emailMessage.Subject = emailContent.Subject;

            var builder = new BodyBuilder { TextBody = emailContent.TextBody };


            emailMessage.Body = builder.ToMessageBody();
            using (var client = new SmtpClient())
            {
                var credentials = new NetworkCredential
                {
                    UserName = "noreply.fiiadmission@gmail.com",
                    Password = "2d0380fvo"
                };
                await client.ConnectAsync("smtp.gmail.com", 587).ConfigureAwait(false);
                await client.AuthenticateAsync(credentials);
                await client.SendAsync(emailMessage).ConfigureAwait(false);
                await client.DisconnectAsync(true).ConfigureAwait(false);
            }
        }
    }
}
