using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Helpers;
using Api.ModelView;
using AutoMapper;
using Business.CandidatesRepo;
using Business.RepartitionRepo;
using Data.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Api.Controllers
{
    // [Authorize(AuthenticationSchemes = "Bearer", Policy = "User")]
    [Produces("application/json")]
  [Route("api/Repartition")]
  public class RepartitionController : Controller
  {
    private readonly IRepartitionRepository _repartitionRepository;
      private readonly ICandidateRepository _candidateRepository;
        private readonly IMapper _mapper;
    readonly ILogger _logger;

    public RepartitionController(IRepartitionRepository repartitionRepository, IMapper mapper, ICandidateRepository candidateRepository,
        ILoggerFactory loggerFactory)
    {
        _candidateRepository = candidateRepository;
      _repartitionRepository = repartitionRepository;
      _mapper = mapper;
      _logger = loggerFactory.CreateLogger(nameof(RepartitionController));
    }

   // [Authorize(AuthenticationSchemes = "Bearer", Policy = "Admin")]
    [HttpGet("{classroomName}")]
    [NoCache]
    [ProducesResponseType(typeof(List<AssignedCandidate>), 200)]
    [ProducesResponseType(typeof(ApiResponse), 400)]
    public async Task<IActionResult> GetRepartitionsByClassroomName(string classroomName)
    {
      if (classroomName == null)
        return BadRequest(new ApiResponse {Status = false});
      try
      {
        var repartitions = await _repartitionRepository.GetCandidatesPageAsync(classroomName);
        List<AssignedCandidate> assignedCandidatesList = new List<AssignedCandidate>();
          foreach (var candidate in repartitions.Records)
          {
              assignedCandidatesList.Add(new AssignedCandidate
              {
                  AssignedCanidate = _mapper.Map<CandidatModel>(await _candidateRepository.GetByFormEmail(candidate.ApprovedCandidateEmail)),
                  ExamTime = candidate.ExamTime
              });
          }
        return Ok(assignedCandidatesList);
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
        return BadRequest(new ApiResponse {Status = false});
      try
      {
        var repartitions = await _repartitionRepository.GetCandidateRepartition(email);
        return Ok(repartitions);
      }
      catch (Exception exp)
      {
        _logger.LogError(exp.Message);
        return BadRequest(new ApiResponse {Status = false});
      }
    }

   // [Authorize(AuthenticationSchemes = "Bearer", Policy = "Admin")]
    [HttpGet("classrooms")]
    [NoCache]
    [ProducesResponseType(typeof(List<Classroom>), 200)]
    [ProducesResponseType(typeof(ApiResponse), 400)]
    public async Task<IActionResult> GetClassRooms()
    {

      try
      {
        var classrooms = await _repartitionRepository.GetAllClassrooms();
        return Ok(classrooms);
      }
      catch (Exception exp)
      {
        _logger.LogError(exp.Message);
        return BadRequest(new ApiResponse {Status = false});
      }
    }

  //  [Authorize(AuthenticationSchemes = "Bearer", Policy = "Admin")]
    [HttpPost]
    [ProducesResponseType(typeof(ApiResponse), 201)]
    [ProducesResponseType(typeof(ApiResponse), 400)]
    public async Task<IActionResult> GenerateRepartition([FromBody] RepartitionConfigurationModel configurationModel)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(new ApiResponse {Status = false, ModelState = ModelState});
      }
      try
      {
        var configuration = _mapper.Map<RepartitionConfiguration>(configurationModel);
        if (await _repartitionRepository.GenerateRepartition(configuration))
        {
          return Ok(new ApiResponse {Status = true});
        }
        return BadRequest(new ApiResponse {Status = false});
      }
      catch (Exception exp)
      {
        _logger.LogError(exp.Message);
        return BadRequest(new ApiResponse {Status = false});
      }

    }

  }
}