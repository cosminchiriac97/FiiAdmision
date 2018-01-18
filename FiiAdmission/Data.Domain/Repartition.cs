using System;
using System.ComponentModel.DataAnnotations;

namespace Data.Domain
{
    public class Repartition
    {
       [Key]
       public Guid Id { set; get; }
       public string ApprovedCandidateEmail { set; get; }
       public Classroom RClassroom { set; get; }
       public DateTime ExamTime { set; get; }
    }
}
