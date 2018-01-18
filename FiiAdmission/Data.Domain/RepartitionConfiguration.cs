using System;
using System.Collections.Generic;

namespace Data.Domain
{
    public class RepartitionConfiguration
    {
        public List<Classroom> AvailableClassrooms { get; set; } 
        public DateTime ExamTime { get; set; }

    }
}
