using System.Linq;
using System.Threading.Tasks;
using Data.Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Api.ModelView;
using Api.Auth;
using Business.EmailServices;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly JsonSerializerSettings _serializerSettings;
        private readonly IConfiguration _configuration;

        public AuthController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager,
            IConfiguration configuration)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;

            _serializerSettings = new JsonSerializerSettings
            {
                Formatting = Formatting.Indented
            };
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> Protected()
        {
            EmailSender sender = new EmailSender();
            await sender.SendEmail(new Email{EmailAdress = "domnaru.alexandru@gmail.com",Subject = "Citeste Body-ul", TextBody = "Esti un gay"});
            return Ok("Protected area");
        }

        // POST api/auth/login
        [HttpPost("login")]
        public async Task<object> Post([FromBody] CredentialsViewModel credentials)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var result =
                await _signInManager.PasswordSignInAsync(credentials.UserName, credentials.Password, false, false);
            if (result.Succeeded)
            {
                var appUser = _userManager.Users.SingleOrDefault(r => r.UserName == credentials.UserName);
                var token = await JwtFactory.GenerateJwtToken(credentials.UserName, appUser, _configuration);
                return Ok(token);
            }
            return BadRequest("INVALID_LOGIN_ATTEMPT");
        }
    }


}
