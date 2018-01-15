using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Data.Domain;
using Data.Persistence.ContentDb;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Business.CandidatesRepo
{
    public class CandidateRepository : ICandidateRepository
    {
        private readonly IContentDbContext _databaseContext;
        private readonly ILogger _logger;
        public CandidateRepository(IContentDbContext databaseContext, ILoggerFactory loggerFactory)
        {
            _databaseContext = databaseContext;
            _logger = loggerFactory.CreateLogger("CandidateRepository");
        }


        public async Task<Candidate> Add(Candidate candidate)
        {
            _databaseContext.Candidates.Add(candidate);
            try
            {
                await _databaseContext.SaveChangesAsync();
            }
            catch (Exception exp)
            {
                _logger.LogError($"Error in {nameof(Add)}: " + exp.Message);
            }
            return candidate;
        }

        public async Task<List<Candidate>> GetAll()
        {
            return await _databaseContext.Candidates.ToListAsync();
        }

        public async Task<Candidate> GetByFormEmail(string email)
        {
            return await _databaseContext.Candidates.SingleOrDefaultAsync( x => x.Email == email);
        }

        public async Task<Candidate> GetByFormId(Guid formId)
        {
            return await _databaseContext.Candidates.SingleOrDefaultAsync(x => x.FormId == formId);
        }
    }
}
