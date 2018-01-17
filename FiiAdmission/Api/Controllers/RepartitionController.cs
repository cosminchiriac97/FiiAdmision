using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Helpers;
using Api.ModelView;
using AutoMapper;
using Business.RepartitionRepo;
using Data.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Repartition")]
    public class RepartitionController : Controller
    {
        private readonly IRepartitionRepository _repartitionRepository;
        private readonly IMapper _mapper;
        readonly ILogger _logger;

        public RepartitionController(IRepartitionRepository repartitionRepository, IMapper mapper,
            ILoggerFactory loggerFactory)
        {
            _repartitionRepository = repartitionRepository;
            _mapper = mapper;
            _logger = loggerFactory.CreateLogger(nameof(RepartitionController));
        }

       
        [HttpGet("{classroomName}")]
        [NoCache]
        [ProducesResponseType(typeof(List<Repartition>), 200)]
        [ProducesResponseType(typeof(ApiResponse), 400)]
        public async Task<IActionResult> GetRepartitionsByClassroomName(string classroomName)
        {
            if(classroomName==null)
                return BadRequest(new ApiResponse { Status = false });
            try
            {
                var repartitions = await _repartitionRepository.GetCandidatesPageAsync(classroomName);
                return Ok(repartitions);
            }
            catch (Exception exp)
            {
                _logger.LogError(exp.Message);
                return BadRequest(new ApiResponse {Status = false});
            }
        }
        [HttpGet("email/{email}")]
        [NoCache]
        [ProducesResponseType(typeof(Repartition), 200)]
        [ProducesResponseType(typeof(ApiResponse), 400)]
        public async Task<IActionResult> GetRepartitionByEmail(string email)
        {
            if (email == null)
                return BadRequest(new ApiResponse { Status = false });
            try
            {
                var repartitions = await _repartitionRepository.GetCandidateRepartition(email);
                return Ok(repartitions);
            }
            catch (Exception exp)
            {
                _logger.LogError(exp.Message);
                return BadRequest(new ApiResponse { Status = false });
            }
        }
        [HttpPost]
        [ProducesResponseType(typeof(ApiResponse), 201)]
        [ProducesResponseType(typeof(ApiResponse), 400)]
        public async Task<IActionResult> GenerateRepartition([FromBody] RepartitionConfigurationModel configurationModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new ApiResponse { Status = false, ModelState = ModelState });
            }
            try
            {
                var configuration = _mapper.Map<RepartitionConfiguration>(configurationModel);
                if (await _repartitionRepository.GenerateRepartition(configuration))
                {
                    return Ok(new ApiResponse{Status = true});
                }
                return BadRequest(new ApiResponse { Status = false });
            }
            catch (Exception exp)
            {
                _logger.LogError(exp.Message);
                return BadRequest(new ApiResponse { Status = false });
            }

        }

    }
}