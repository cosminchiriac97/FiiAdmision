using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Domain
{
   public class Repartition
    {
        public Guid Id { get; set; }
        public string Class { get; set; }
        public int NumberOfSeats { get; set; }
        public DateTime StartDate { get; set; }
        public string Notification { get; set; }

    }
}
