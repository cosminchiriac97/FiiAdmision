using System;
using System.Threading.Tasks;
using Api.Helpers;
using Api.ModelView;
using AutoMapper;
using Business.AccountsRepository;
using Data.Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;


namespace Api.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IMapper _mapper;
        private readonly IJobSeekerRepository _jobSeekerRepository;
        public AccountController(UserManager<AppUser> userManager, IMapper mapper, IJobSeekerRepository jobSeekerRepository)
        {
            _userManager = userManager;
            _mapper = mapper;
            _jobSeekerRepository = jobSeekerRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]RegistrationModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = _mapper.Map<AppUser>(model);

            var result = await _userManager.CreateAsync(userIdentity, model.Password);

            if (!result.Succeeded) return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

            await _jobSeekerRepository.AddAsync(new JobSeeker {Id = new Guid(),IdentityId = userIdentity.Id});

            return new OkObjectResult("Account created");
        }

    }
}