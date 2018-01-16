using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Business.CandidatesRepo;
using Data.Domain;
using Data.Persistence.ContentDb;
using Microsoft.Extensions.Logging;

namespace Business.RepartitionRepo
{
    public class RepartitionRepository : IRepartitionRepository
    {
        private readonly IContentDbContext _databaseContext;
        private readonly ILogger _logger;
        private readonly ICandidateRepository _candidateRepository;
        public RepartitionRepository(IContentDbContext databaseContext, ILogger logger, ICandidateRepository candidateRepository)
        {
            _databaseContext = databaseContext;
            _candidateRepository = candidateRepository;
            _logger = logger;
        }

        public async Task<Boolean> GenerateRepartition(RepartitionConfiguration configuration)
        {
            //Get Capacity
            int capacity = 0;
            foreach (var classroom in configuration.AvailableClassrooms)
            {
                capacity = capacity + classroom.Capacity;
            }
            if (_candidateRepository.GetApprovedCandidatesNumber() > capacity)
            {
                return false;
            }

            var approvedCandidates = await _candidateRepository.GetApprovedCandidates();

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
