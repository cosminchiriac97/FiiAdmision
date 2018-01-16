using Data.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Business.RepartitionRepo
{
    public interface IRepartitionRepository
    {
        Task<Repartition> GetCandidateRepartition(string email);
        Task<Boolean> GenerateRepartition(RepartitionConfiguration configuration);
    }
}
