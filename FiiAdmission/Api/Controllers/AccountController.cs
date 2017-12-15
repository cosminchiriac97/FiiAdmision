using System;
using System.Threading.Tasks;
using Api.Helpers;
using Api.ModelView;
using AutoMapper;
using Business.AccountsRepository;
using Data.Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Services.EmailService;


namespace Api.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IMapper _mapper;
        private readonly IJobSeekerRepository _jobSeekerRepository;
        private readonly IEmailSender _emailSender;
        public AccountController(UserManager<AppUser> userManager, IMapper mapper, IJobSeekerRepository jobSeekerRepository, IEmailSender emailSender)
        {
            _userManager = userManager;
            _mapper = mapper;
            _jobSeekerRepository = jobSeekerRepository;
            _emailSender = emailSender;
        }

        [HttpGet("ConfirmEmail")]
        public async Task<IActionResult> ConfirmEmail(string userId = "", string code = "")
        {
            if (string.IsNullOrWhiteSpace(userId) || string.IsNullOrWhiteSpace(code))
            {
                ModelState.AddModelError("", "User Id and Code are required");
                return BadRequest(ModelState);
            }
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                return BadRequest();
            }

            IdentityResult result = await _userManager.ConfirmEmailAsync(user, code);
            if (result.Succeeded)
            {
                return Ok();
            }        
            return BadRequest(result);
        }
       
        [AllowAnonymous]
        [HttpPost("create_account")]
        public async Task<IActionResult> AccountCreation([FromBody]RegistrationModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = _mapper.Map<AppUser>(model);

            var result = await _userManager.CreateAsync(userIdentity, model.Password);

            if (!result.Succeeded) return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

            var code = await _userManager.GenerateEmailConfirmationTokenAsync(userIdentity);
            var callbackUrl = Url.Action(
                "ConfirmEmail",
                "Account",
                new {userId = userIdentity.Id, code},
                HttpContext.Request.Scheme
            );

            await _emailSender.SendEmail(new EmailContent{EmailAdress = userIdentity.Email, Subject = "ConfirmationEmail", TextBody = "Please confirm your account by clicking <a href=\"" + callbackUrl + "\">here</a>" });

            await _jobSeekerRepository.AddAsync(new JobSeeker {Id = new Guid(),IdentityId = userIdentity.Id});

            return  Ok("Account created");
        }
  
        [AllowAnonymous]
        [HttpPost("reset_password")]
        public async Task<IActionResult> PasswordRecovery([FromBody]string email)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = await _userManager.FindByEmailAsync(email);

            var code = await _userManager.GeneratePasswordResetTokenAsync(userIdentity);
            var callbackUrl = Url.Action(
                "ResetPassword",
                "Account",
                HttpContext.Request.Scheme
            );

            await _emailSender.SendEmail(new EmailContent
            {
                EmailAdress = userIdentity.Email,
                Subject = "PasswordReset",
                TextBody = "Go to this link " + callbackUrl + " and reset your password using this code: " + code
            });

            return Ok("Password reset link sent");
        }

        [AllowAnonymous]
        [HttpPut("ResetPassword")]
        public async Task<IActionResult> ResetPassword([FromBody]ResetPasswordViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var user = await _userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                return BadRequest();
            }

            var result = await _userManager.ResetPasswordAsync(user, model.Code, model.Password);
            if (result.Succeeded)
            {
                return Ok("Password succesfuly reset.");
            }
            return BadRequest(result);
        }
    }
}