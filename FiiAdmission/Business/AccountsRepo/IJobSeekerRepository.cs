using System.Threading.Tasks;
using Data.Domain;

namespace Business.AccountsRepo
{
    public interface IJobSeekerRepository
    {
        Task AddAsync(JobSeeker jobSeeker);
    }
}
