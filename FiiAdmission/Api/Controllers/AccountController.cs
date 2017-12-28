using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using Api.Helpers;
using Api.ModelView;
using AutoMapper;
using Business.AccountsRepository;
using Business.EmailServices;
using Data.Domain;
using Microsoft.ApplicationInsights.AspNetCore.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;


namespace Api.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly HttpClient _client = new HttpClient();
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

        [AllowAnonymous]
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
                return BadRequest("no such user");
            }

            IdentityResult result = await _userManager.ConfirmEmailAsync(user, code);
            if (result.Succeeded)
            {
                result = await _userManager.AddClaimAsync(user, new Claim("Role1", "NotAdmin"));
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
                new { userId = userIdentity.Id, code },
                HttpContext.Request.Scheme
            );

            await _emailSender.SendEmail(new Email { EmailAdress = userIdentity.Email, Subject = "ConfirmationEmail", TextBody = "Please confirm your account by clicking <a href=\"" + callbackUrl + "\">here</a>" });

            await _jobSeekerRepository.AddAsync(new JobSeeker { Id = new Guid(), IdentityId = userIdentity.Id });

            return Ok("Account created");
        }

        [AllowAnonymous]
        [HttpPost("reset_password")]
        public async Task<IActionResult> PasswordRecovery([FromBody]EmailModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = await _userManager.FindByEmailAsync(model.Email);

            var code = await _userManager.GeneratePasswordResetTokenAsync(userIdentity);
            var callbackUrl = Url.Action(
                "ResetPassword",
                "Account",
                new { userId = userIdentity.Id, code },
                HttpContext.Request.Scheme
            );

            await _emailSender.SendEmail(new Email
            {
                EmailAdress = userIdentity.Email,
                Subject = "PasswordReset",
                TextBody = "Go to this link to reset your password: " + callbackUrl
            });

            return Ok("Password reset link sent");
        }

        [AllowAnonymous]
        [HttpGet("ResetPassword")]
        public async Task<IActionResult> ResetPassword(string userId = "", string code = "")
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

            
            //simulate client
            var displayUrl = HttpContext.Request.Scheme + "://" +  HttpContext.Request.GetUri().Authority;
            _client.BaseAddress = new Uri(displayUrl);
            _client.DefaultRequestHeaders.Accept.Clear();
            _client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));
            ResetPasswordModel model = new ResetPasswordModel
            {
                Email = user.Email,
                Password = "asdfghhhh",
                ConfirmPassword = "asdfghhhh",
                Code = code
            };
            string json = await Task.Run(() => JsonConvert.SerializeObject(model));
            var content = new StringContent(json, Encoding.UTF8, "application/json");
            HttpResponseMessage response = await _client.PutAsync(
                $"api/account/reset", content);
            if (response.IsSuccessStatusCode)
            {
                return Ok("ok");
            }
            return BadRequest("Something went wrong");
        }

        [AllowAnonymous]
        [HttpPut("Reset")]
        public async Task<IActionResult> PasswordReset([FromBody]ResetPasswordModel model)
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

        [HttpGet("{encodedEmail}", Name = "GetUser")]
        [NoCache]
        [ProducesResponseType(200)]
        [ProducesResponseType(204)]
        [ProducesResponseType(typeof(ApiResponse), 400)]
        public async Task<IActionResult> GetUserInfo(string encodedEmail)
        {
            if (string.IsNullOrWhiteSpace(encodedEmail))
            {
                return BadRequest(new ApiResponse { Status = false });
            }

            string email = HttpUtility.UrlDecode(encodedEmail);
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null)
            {
                return NoContent();
            }
            return Ok();
        }
    }
}