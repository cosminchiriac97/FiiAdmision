using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Helpers;
using Api.ModelView;
using AutoMapper;
using Business.AccountsRepository;
using Business.EmailServices;
using Data.Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Authorize(Policy = "User")]
    [Route("api/(controller")]
    public class UserController : Controller
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IMapper _mapper;
        private readonly IJobSeekerRepository _jobSeekerRepository;
        private readonly IEmailSender _emailSender;
        public UserController(UserManager<AppUser> userManager, IMapper mapper, IJobSeekerRepository jobSeekerRepository, IEmailSender emailSender)
        {
            _userManager = userManager;
            _mapper = mapper;
            _jobSeekerRepository = jobSeekerRepository;
            _emailSender = emailSender;
        }

        [HttpPut("change_password")]
        //[ValidateAntiForgeryToken]
        [ProducesResponseType(typeof(ApiResponse), 400)]
        [ProducesResponseType(200)]
        public async Task<IActionResult> ChangePassword([FromBody]ResetPasswordModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new ApiResponse { ModelState = ModelState, Status = false });
            }

            var identityName = User.Identity.Name;
            var user = await _userManager.FindByNameAsync(identityName);
            bool passwordChecks = await _userManager.CheckPasswordAsync(user, model.CurrentPassword);

            if (!passwordChecks)
            {
                return BadRequest("Current password is incorrect.");
            }

            var result = await _userManager.ChangePasswordAsync(user, model.CurrentPassword, model.Password);
            if (result.Succeeded)
            {
                return Ok("Password successfully changed.");
            }
            return BadRequest(new ApiResponse { ModelState = ModelState, Status = false });
        }

        [Authorize(Policy = "Administrator")]
        [HttpGet("{email}", Name = "GetUser")]
        [NoCache]
        [ProducesResponseType(200)]
        [ProducesResponseType(204)]
        [ProducesResponseType(typeof(ApiResponse), 400)]
        public async Task<IActionResult> GetUserInfo(string email)
        {
            if (string.IsNullOrWhiteSpace(email))
            {
                return BadRequest(new ApiResponse { Status = false });
            }
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null)
            {
                return NoContent();
            }
            return Ok();
        }
    }
}