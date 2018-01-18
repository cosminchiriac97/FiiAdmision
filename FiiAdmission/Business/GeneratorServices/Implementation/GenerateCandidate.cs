using Business.GeneratorServices.Interfaces;
using Data.Domain;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Business.GeneratorServices.Implementation
{
    public class GenerateCandidate : IGenerateCandidate
    {
        public Candidate Generate(JObject formJObject, Candidate candidate)
        {
            dynamic dynJson = JsonConvert.DeserializeObject(formJObject.GetValue("form").ToString());
            foreach (var item in dynJson)
            {
                 
                   if (item.name.ToString().Equals("last-name-id"))
                       candidate.LastName = item.value.ToString();
                   if (item.name.ToString().Equals("first-name"))
                       candidate.FirstName = item.value.ToString();
                   if (item.name.ToString().Equals("CNP"))
                       candidate.CNP = item.value.ToString();
                   if (item.name.ToString().Equals("institution"))
                       candidate.School = item.value.ToString();
                   if (item.name.ToString().Equals("exam-choice"))
                       candidate.Subject = item.value.ToString();                            
            }
            return  candidate;
        }

    
    }
}
