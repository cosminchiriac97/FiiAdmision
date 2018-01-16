using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Business.GeneratorServices.Interfaces;
using Data.Domain;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Business.GeneratorServices.Implementation
{
    public class GenerateCandidate : IGenerateCandidate
    {
        public Candidate Generate(JObject formJObject, string email)
        {
            dynamic dynJson = JsonConvert.DeserializeObject(formJObject.ToString());
            var candidate = new Candidate { Email = email};
            foreach (var item in dynJson)
            {
                if (item.name.Equals("last-name-id"))
                    candidate.LastName = item.value;
                if (item.name.Equals("first-name"))
                    candidate.FirstName = item.value;
                if (item.name.Equals("CNP"))
                    candidate.CNP = item.value;
                if (item.name.Equals("institution"))
                    candidate.School = item.value;
                if (item.name.Equals("status"))
                    candidate.Status=item.value;
                if (item.name.Equals("exam-choice"))
                    candidate.Subject = item.value;
            }
            return  candidate;
        }

    
    }
}
