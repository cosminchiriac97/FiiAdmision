using System;
using System.Collections.Generic;
using System.Linq;
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

    public async Task<Candidate> AddAsync(Candidate candidate)
    {
      _databaseContext.Candidates.Add(candidate);
      try
      {
        await _databaseContext.SaveChangesAsync();
      }
      catch (Exception exp)
      {
        _logger.LogError($"Error in {nameof(AddAsync)}: " + exp.Message);
      }

      return candidate;
    }

    public async Task<List<Candidate>> GetAll()
    {
      return await _databaseContext.Candidates.ToListAsync();
    }

    public async Task<Candidate> GetByFormEmail(string email)
    {
      return await _databaseContext.Candidates.SingleOrDefaultAsync(x => x.Email.Equals(email));
    }

    public async Task<PagingResult<Candidate>> GetCandidatesPageAsync(int skip, int take)
    {
      var totalRecords = await _databaseContext.Candidates.CountAsync();
      var candidates = await _databaseContext.Candidates
        .Where(c => c.Approved == false)
        .Where(c => c.Completed)
        .OrderBy(c => c.LastName)
        .Skip(skip)
        .Take(take)
        .ToListAsync();
      return new PagingResult<Candidate>(candidates, totalRecords);
    }

    public async Task<List<Candidate>> GetApprovedCandidates()
    {
      var candidates = await _databaseContext.Candidates
        .Where(c => c.Approved)
        .Where(c => c.Completed)
        .OrderBy(c => c.LastName)
        .ToListAsync();

      return candidates;
    }

    public int GetApprovedCandidatesNumber()
    {
      var count = _databaseContext.Candidates.Count(c => c.Approved && c.Completed);

      return count;
    }
  }
}
