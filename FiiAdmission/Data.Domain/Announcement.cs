using System;

namespace Data.Domain
{
    public class Announcement
    {
        public Guid Id { private set; get; }
        public string AdminId { private set; get; }
        public DateTime PublishDate { private set; get; }
        public string Title { private set; get; }
        public string Body { private set; get; }
    }

}