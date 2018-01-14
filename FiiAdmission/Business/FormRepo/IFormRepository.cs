using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Data.Domain;

namespace Business.FormRepo
{
    public interface IFormRepository
    {
        Task<Form> Add(Form form);
        Task<Form> GetForm(Guid id);
    }
}