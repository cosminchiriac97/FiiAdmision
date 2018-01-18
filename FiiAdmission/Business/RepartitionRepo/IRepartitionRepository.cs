using Data.Domain;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Business.RepartitionRepo
{
    public interface IRepartitionRepository
    {
        Task<List<Classroom>> GetAllClassrooms();
        Task<Repartition> GetCandidateRepartition(string email);
        Task<Boolean> GenerateRepartition(RepartitionConfiguration configuration);
        Task<PagingResult<Repartition>> GetCandidatesPageAsync(string classRoomName);
    }
}
