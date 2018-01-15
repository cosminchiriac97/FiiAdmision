using System;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using Api.Helpers;
using Api.ModelView;
using AutoMapper;
using Business.AccountsRepo;
using Business.EmailServices;
using Data.Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;


namespace Api.Controllers
{
    
    
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        //private readonly HttpClient _client = new HttpClient();
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
        
        //account creation
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

            await _emailSender.SendEmail(new Email
            {
                EmailAdress = userIdentity.Email,
                Subject = "FIIAdmis - Confirmarea email-ului",
                TextBody = "Confirmati-va mailul, utilizand acest <a href=\"" + callbackUrl + "\">link</a>"
            });

            //await _jobSeekerRepository.AddAsync(new JobSeeker { Id = new Guid(), IdentityId = userIdentity.Id });

            return Ok("Account created");
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
                /*IN CAZ CA VREI CONT DE ADMIN, DECOMENTEAZA INAINTE SA ITI CONFIRMI MAILUL DUPA CREARE
                 * var cl = new List<Claim>
                {
                    new Claim("User", "User"),
                    new Claim("Admin", "Administrator")
                };
                result = await _userManager.AddClaimsAsync(user, cl);*/
                result = await _userManager.AddClaimAsync(user, new Claim("User", "User"));
                return Redirect("https://fii-admission.firebaseapp.com/confirm?returnUrl=%252login");
            }
            return BadRequest(result);
        }

        //password recovery
        [AllowAnonymous]
        [HttpPost("password_recovery_s1")]
        public async Task<IActionResult> PasswordRecoveryInitiate([FromBody]EmailModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = await _userManager.FindByEmailAsync(model.Email);

            var code = await _userManager.GeneratePasswordResetTokenAsync(userIdentity);
            var callbackUrl = "https://fii-admission.firebaseapp.com/recovery?userEmail=" + userIdentity.Email +
                              "&code=" + code;
                /*Url.Action(
                "PasswordRecoveryStep2",
                "Account",
                new { userId = userIdentity.Id, code },
                HttpContext.Request.Scheme
            );*/

            await _emailSender.SendEmail(new Email
            {
                EmailAdress = userIdentity.Email,
                Subject = "FIIAdmis - Resetare parola",
                TextBody = "Resetati-va parola utilizand acest <a href=\"" + callbackUrl + "\">link</a>"
            });

            return Ok("Password reset link sent");
        }

        /*
        [AllowAnonymous]
        [HttpGet("password_recovery_s2")]
        public async Task<IActionResult> PasswordRecoveryStep2(string userId = "", string code = "")
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
            RecoverPasswordModel model = new RecoverPasswordModel
            {
                Email = user.Email,
                Password = "asdfghhhh",
                Code = code
            };
            string json = await Task.Run(() => JsonConvert.SerializeObject(model));
            var content = new StringContent(json, Encoding.UTF8, "application/json");
            HttpResponseMessage response = await _client.PutAsync(
                $"api/account/password_recovery_s3", content);
            if (response.IsSuccessStatusCode)
            {
                return Ok("ok");
            }
            return BadRequest("Something went wrong");
        }*/

        [AllowAnonymous]
        [HttpPut("password_recovery_s2")]
        public async Task<IActionResult> PasswordRecoveryStep2([FromBody]RecoverPasswordModel model)
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
                return Ok("Password succesfully reset.");
            }
            return BadRequest(result);
        }

        [Authorize(Policy = "User")]
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