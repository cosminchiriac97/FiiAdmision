using System.Threading.Tasks;
using Data.Domain;

namespace Business.AccountsRepository
{
    public interface IJobSeekerRepository
    {
        Task AddAsync(JobSeeker jobSeeker);
    }
}
