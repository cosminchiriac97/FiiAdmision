using Data.Domain;
using Newtonsoft.Json.Linq;

namespace Business.GeneratorServices.Interfaces
{
    public interface IGenerateCandidate
    {
        Candidate Generate(JObject formJObject, Candidate candidate);
    }
}
