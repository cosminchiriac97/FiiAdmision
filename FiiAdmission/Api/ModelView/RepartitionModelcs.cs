using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.ModelView
{
    public class RepartitionModelcs
    {
        public Guid Id { set; get; }
        public string ApprovedCandidateEmail { set; get; }
        public ClassroomModel RClassroom { set; get; }
        public DateTime ExamTime { set; get; }
    }
}
