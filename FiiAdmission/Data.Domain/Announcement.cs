using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Domain
{
    public class Announcement
    {
        public Guid Id { set; get; }
        public string AdminId { set; get; }
        public DateTime PublishDate { set; get; }
        public string Body { set; get; }
    }
}
