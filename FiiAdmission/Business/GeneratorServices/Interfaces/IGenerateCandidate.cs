using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Data.Domain;
using Newtonsoft.Json.Linq;

namespace Business.GeneratorServices.Interfaces
{
    public interface IGenerateCandidate
    {
        Candidate Generate(JObject formJObject, string email);
    }
}
