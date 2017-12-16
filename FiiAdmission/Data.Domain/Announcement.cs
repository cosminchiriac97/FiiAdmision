using System;

namespace Data.Domain
{
    public class Announcement
    {
        public Guid Id { set; get; }
        public string AdminId { set; get; }
        public DateTime PublishDate { set; get; }
        public string Title { set; get; }
        public string Body { set; get; }
    }

}