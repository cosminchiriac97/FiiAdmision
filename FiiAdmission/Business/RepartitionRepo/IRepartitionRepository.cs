using Data.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Business.RepartitionRepo
{
    public interface IRepartitionRepository
    {
        Task<List<Repartition>> GetClassRooms();
        Task<Repartition> GetCandidateRepartition(Guid id);
        Task<List<Repartition>> GetCandidates(Repartition repartition);
        Task<Repartition> GenerateRepartition();
    }
}
