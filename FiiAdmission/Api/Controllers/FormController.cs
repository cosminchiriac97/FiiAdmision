using System;
using System.IO;
using System.Threading.Tasks;
using Api.Helpers;
using Api.ModelView;
using Business.FormRepo;
using Business.StorageAzureServices.Interfaces;
using Data.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Sockets.Internal;
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
        public FormController(IAzureBlobStorage storage, IFormRepository formRepository, ILoggerFactory loggerFactory)
        {
            _storage = storage;
            _logger = loggerFactory.CreateLogger(nameof(FormController));
            _formRepository = formRepository;
        }

        [HttpGet("{email}", Name = "GetFormsRoute")]
        [ProducesResponseType(typeof(JObject), 200)]
        [ProducesResponseType(typeof(ApiResponse), 400)]
        public async Task<IActionResult> GetForm(string email)
        {
         
            try
            {
                var form = await _formRepository.GetForm(email);
                if (form == null)
                {
                    return BadRequest(new ApiResponse {Status = false});
                }
                var json = await _storage.DownloadAsync(form.Id.ToString());
                JObject jsonObject = JObject.Parse(json);
                if (!jsonObject.HasValues)
                {
                    return BadRequest(new ApiResponse {Status = false});
                }

                return Ok(jsonObject);
            }
            catch (Exception exp)
            {
                _logger.LogError(exp.Message);
                return BadRequest(new ApiResponse {Status = false});
            }
          
        }

        [HttpPost] 
        [ProducesResponseType(typeof(ApiResponse), 201)]
        [ProducesResponseType(typeof(ApiResponse), 400)]
        public async Task<IActionResult> CreateForm([FromBody]CreationFormModel formModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new ApiResponse {Status = false, ModelState = ModelState});
            }
            try
            {
                Form form = new Form {Id = new Guid(), UserEmail = formModel.Email};
                
                using (var memoryStream = new MemoryStream())
                {
                    using (Stream s = Convertors.GenerateStreamFromString(formModel.BlobObject))
                    {
                       
                        await s.CopyToAsync(memoryStream);

                        form = await _formRepository.Add(form);
                        if (form == null)
                        {
                            return BadRequest(new ApiResponse { Status = false });
                        }
                        //TO DO: to make a candidate object
                        await _storage.UploadAsync(form.Id.ToString(), memoryStream);
                     
                    }
                }
                return CreatedAtRoute("GetFormsRoute", new { id = form.Id },
                    new ApiResponse { Status = true });

            }
            catch (Exception exp)
            {
                _logger.LogError(exp.Message);
                return BadRequest(new ApiResponse {Status = false});
            }
        }
        

    }
}