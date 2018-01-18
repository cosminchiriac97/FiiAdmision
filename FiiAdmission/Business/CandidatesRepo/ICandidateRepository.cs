using System.Collections.Generic;
using System.Threading.Tasks;
using Data.Domain;

namespace Business.CandidatesRepo
{
    public interface ICandidateRepository
    {
        Task<Candidate> AddAsync(Candidate candidate);
        Task<List<Candidate>> GetAll();
        Task<Candidate> GetByFormEmail(string email);
        Task<List<Candidate>> GetApprovedCandidates();
        int GetApprovedCandidatesNumber();
        Task<PagingResult<Candidate>> GetCandidatesPageAsync(int skip, int take);
    }
}
