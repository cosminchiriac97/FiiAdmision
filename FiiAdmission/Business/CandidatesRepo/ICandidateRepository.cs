using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Data.Domain;

namespace Business.CandidatesRepo
{
    public interface ICandidateRepository
    {
        Task<List<Candidate>> GetAll();
        Task<Candidate> GetByFormId(Guid formId);
        Task<Candidate> GetByFormEmail(string email);
        Task<Candidate> Add(Candidate candidate);
    }
}
