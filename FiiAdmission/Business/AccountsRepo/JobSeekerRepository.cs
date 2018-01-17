using System.Collections.Generic;
using System.Threading.Tasks;
using Data.Domain;
using Data.Persistence.ApplicationUserDb;
using Microsoft.EntityFrameworkCore;

namespace Business.AccountsRepo
{
  public class JobSeekerRepository : IJobSeekerRepository
  {
    private readonly IApplicationUserDbContext _databaseUserContext;

    public JobSeekerRepository(IApplicationUserDbContext databaseUserContext)
    {
      _databaseUserContext = databaseUserContext;
    }

    public async Task AddAsync(JobSeeker jobSeeker)
    {
      await _databaseUserContext.JobSeekers.AddAsync(jobSeeker);
      await _databaseUserContext.SaveChangesAsync();
    }

    public async Task<List<JobSeeker>> GetAll()
    {
      return await _databaseUserContext.JobSeekers.ToListAsync();
    }
  }
}
