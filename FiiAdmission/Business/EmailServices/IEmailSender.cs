using Data.Domain;
using System.Threading.Tasks;

namespace Business.EmailServices
{
    public interface  IEmailSender
    {
        Task SendEmail(Email emailContent);
    }
}
