using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.ModelView.Validations;
using FluentValidation.Attributes;

namespace Api.ModelView
{
    [Validator(typeof(AnnouncementModelValidator))]
    public class AnnouncementModel
    {
        public Guid Id { set; get; }
        public string AdminId { set; get; }
        public DateTime PublishDate { set; get; }
        public string Title { set; get; }
        public string Body { set; get; }
    }
}
