using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Data.Domain;
using Data.Persistence.ContentDb;
using Microsoft.Extensions.Logging;

namespace Business.RepartitionRepo
{
    public class RepartitionRepository : IRepartitionRepository
    {
        private readonly IContentDbContext _databaseContext;
        private readonly ILogger _logger;

        public RepartitionRepository(IContentDbContext databaseContext, ILogger logger)
        {
            _databaseContext = databaseContext;
            _logger = logger;
        }

        public Task<Repartition> GenerateRepartition()
        {
            throw new NotImplementedException();
        }

        public Task<Repartition> GetCandidateRepartition(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<List<Repartition>> GetCandidates(Repartition repartition)
        {
            throw new NotImplementedException();
        }

        public Task<List<Repartition>> GetClassRooms()
        {
            throw new NotImplementedException();
        }
    }
}
