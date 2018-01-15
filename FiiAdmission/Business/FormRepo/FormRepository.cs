using System;
using System.Threading.Tasks;
using Data.Domain;
using Data.Persistence.ContentDb;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Business.FormRepo
{
    public class FormRepository : IFormRepository
    {
        private readonly IContentDbContext _databaseContext;
        private readonly ILogger _logger;
        public FormRepository(IContentDbContext databaseContext, ILoggerFactory loggerFactory)
        {
            _databaseContext = databaseContext;
            _logger = loggerFactory.CreateLogger("FormsRepository");
        }

        public async Task<Form> Add(Form form)
        {
            _databaseContext.Forms.Add(form);
            try
            {
                await _databaseContext.SaveChangesAsync();
            }
            catch (Exception exp)
            {
                _logger.LogError($"Error in {nameof(Add)}: " + exp.Message);
            }

            return form;
        }

        public async Task<Form> GetForm(string email)
        {
            return await _databaseContext.Forms.SingleOrDefaultAsync(x => x.UserEmail.Equals(email));
        }
    }
}
