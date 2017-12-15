using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.StorageAzure.Interfaces;

namespace Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Form")]
    public class FormController : Controller
    {
        private readonly IAzureBlobStorage _storage;
        //To do: database var

        public FormController(IAzureBlobStorage storage)
        {
            _storage = storage;
        }

        [HttpPost]
        public async Task<IActionResult> CreateForm(IFormFile file)
        {
            using (var memoryStream = new MemoryStream())
            {
                await file.CopyToAsync(memoryStream);
                await _storage.UploadAsync("test", memoryStream);
            }
            
            return Ok();
        }
    }
}