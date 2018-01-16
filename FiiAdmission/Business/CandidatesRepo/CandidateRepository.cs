using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<List<Candidate>> GetAll()
        {
            return await _databaseContext.Candidates.ToListAsync();
        }

        public async Task<Candidate> GetByFormEmail(string email)
        {
            return await _databaseContext.Candidates.SingleOrDefaultAsync(x => x.Email == email);
        }

        public async Task<PagingResult<Candidate>> GetCandidatesPageAsync(int skip, int take)
        {
            var totalRecords = await _databaseContext.Candidates.CountAsync();
            var customers = await _databaseContext.Candidates
                .OrderBy(c => c.LastName)
                .Skip(skip)
                .Take(take)
                .ToListAsync();
            return new PagingResult<Candidate>(customers, totalRecords);
        }
    }
}
