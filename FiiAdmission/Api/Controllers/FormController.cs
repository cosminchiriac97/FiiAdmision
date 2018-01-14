using System;
using System.IO;
using System.Threading.Tasks;
using Api.Helpers;
using Api.ModelView;
using Business.FormRepo;
using Business.StorageAzureServices.Interfaces;
using Data.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;

namespace Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Form")]
    public class FormController : Controller
    {
        private readonly IAzureBlobStorage _storage;
        private readonly ILogger _logger;
        private readonly IFormRepository _formRepository;
        public FormController(IAzureBlobStorage storage, ILogger logger, IFormRepository formRepository)
        {
            _storage = storage;
            _logger = logger;
            _formRepository = formRepository;
        }

        [HttpGet("{id}", Name = "GetAnnouncementsRoute")]
        [NoCache]
        [ProducesResponseType(typeof(JObject), 200)]
        [ProducesResponseType(typeof(ApiResponse), 400)]
        public async Task<IActionResult> GetForm(Guid Id)
        {
            try
            {
                var form = await _formRepository.GetForm(Id);
                JObject jsonObject;
                using(var memoryStream = await _storage.DownloadAsync(form.Id.ToString()))
                {
                    jsonObject = new JObject(memoryStream);
                }

                if (!jsonObject.HasValues)
                {
                    return BadRequest(new ApiResponse { Status = false });
                }
            

                return Ok(jsonObject);
            }
            catch (Exception exp)
            {
                _logger.LogError(exp.Message);
                return BadRequest(new ApiResponse { Status = false });
            }
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [ProducesResponseType(typeof(ApiResponse), 201)]
        [ProducesResponseType(typeof(ApiResponse), 400)]
        public async Task<IActionResult> CreateForm(CreationFormModel formModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new ApiResponse {Status = false, ModelState = ModelState});
            }
            try
            {
                Form form = new Form {Id = new Guid(), UserId = formModel.Email};
                using (var memoryStream = new MemoryStream())
                {
                    using (Stream s = Convertors.GenerateStreamFromString(formModel.BlobObject))
                    {
                        await s.CopyToAsync(memoryStream);
                        await _storage.UploadAsync(form.Id.ToString(), memoryStream);
                    }
                }
                var newForm = await _formRepository.Add(form);
                if (newForm == null)
                {
                    return BadRequest(new ApiResponse { Status = false });
                }
                //TO DO: to make a candidate object
                return CreatedAtRoute("GetFormsRoute", new { id = newForm.Id },
                    new ApiResponse { Status = true});
            }
            catch (Exception exp)
            {
                _logger.LogError(exp.Message);
                return BadRequest(new ApiResponse {Status = false});
            }
        }
        

    }
}