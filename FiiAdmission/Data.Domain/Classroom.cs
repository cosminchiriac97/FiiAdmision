using System.ComponentModel.DataAnnotations;

namespace Data.Domain
{
    public class Classroom
    {
        [Key]
        public string Name { set; get; }
        public int Capacity { set; get; }
    }
}
