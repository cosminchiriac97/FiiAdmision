using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Threading.Tasks;
using Api.Helpers;
using Api.ModelView;
using Business.CandidatesRepo;
using Business.GeneratorServices.Implementation;
using Business.StorageAzureServices.Interfaces;
using Data.Domain;
using Data.Persistence.ContentDb;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;

namespace Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Form")]
    public class CandidateController : Controller
    {
        private readonly IAzureBlobStorage _storage;
        private readonly ICandidateRepository _candidateRepository;
        private readonly ILogger _logger;
        private readonly IConfiguration _configuration;
        public CandidateController(IAzureBlobStorage storage,  ICandidateRepository candidateRepository, ILoggerFactory loggerFactory, IConfiguration configuration)
        {
            _storage = storage;
            _logger = loggerFactory.CreateLogger(nameof(CandidateController));
            _candidateRepository = candidateRepository;
            _configuration = configuration;
        }

        // GET api/candidates/page/10/10
        [HttpGet("page/{skip}/{take}")]
        [ProducesResponseType(typeof(List<Candidate>), 200)]
        [ProducesResponseType(typeof(ApiResponse), 400)]
        public async Task<ActionResult> CustomersPage(int skip, int take)
        {
            try
            {
                var pagingResult = await _candidateRepository.GetCandidatesPageAsync(skip, take);
                Response.Headers.Add("X-InlineCount", pagingResult.TotalRecords.ToString());
                return Ok(pagingResult.Records);
            }
            catch (Exception exp)
            {
                _logger.LogError(exp.Message);
                return BadRequest(new ApiResponse { Status = false });
            }
        }


        [HttpGet("{email}", Name = "GetFormsRoute")]
        [ProducesResponseType(typeof(JObject), 200)]
        [ProducesResponseType(typeof(ApiResponse), 400)]
        public async Task<IActionResult> GetForm(EmailModel email)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new ApiResponse { Status = false, ModelState = ModelState });
            }
            try
            {
                var json = await _storage.DownloadAsync(email.Email);
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
        public async Task<IActionResult> CreateForm([FromBody] CreationFormModel formModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new ApiResponse {Status = false, ModelState = ModelState});
            }
            var options = new DbContextOptionsBuilder<ContentDbContext>()
                .UseSqlServer(new SqlConnection(_configuration.GetConnectionString("ContentDbConnection")))
                .Options;

            using (var context = new ContentDbContext(options))
            {
                using (var transaction = context.Database.BeginTransaction())
                {
                    try
                    {
                        GenerateCandidate generate = new GenerateCandidate();
                        var candidat = generate.Generate(formModel.BlobObject, formModel.Email);
                        context.Candidates.Add(candidat);
                        await context.SaveChangesAsync();

                        using (var memoryStream = new MemoryStream())
                        {
                            using (Stream s = Convertors.GenerateStreamFromString(formModel.BlobObject))
                            {
                                await s.CopyToAsync(memoryStream);                             
                                await _storage.UploadAsync(formModel.Email, memoryStream);
                            }
                        }
                        transaction.Commit();
                        return CreatedAtRoute("GetFormsRoute", new {email = formModel.Email},
                            new ApiResponse {Status = true});
                    }
                    catch (Exception exp)
                    {
                        _logger.LogError(exp.Message);
                        return BadRequest(new ApiResponse {Status = false});
                    }
                }
            }
        }
    }
}