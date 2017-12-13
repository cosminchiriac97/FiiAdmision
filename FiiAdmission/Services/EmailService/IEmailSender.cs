using System.Threading.Tasks;

namespace Services.EmailService
{
    public interface  IEmailSender
    {
        Task SendEmail(EmailContent emailContent);
    }
}
