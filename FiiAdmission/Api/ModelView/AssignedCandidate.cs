using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.ModelView
{
    public class AssignedCandidate
    {
        public CandidatModel AssignedCanidate { set; get; }
        public DateTime ExamTime { get; set; }
    }
}
