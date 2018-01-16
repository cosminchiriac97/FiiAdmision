using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Domain
{
   public class Repartition
    {
       public string ApprovedCandidateEmail { set; get; }
       public Classroom RClassroom { set; get; }
       public DateTime ExamTime { set; get; }
    }
}
