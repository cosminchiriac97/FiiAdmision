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

        [Authorize(Policy = "AdminOnly")]
        [HttpGet]
        public IActionResult Protected()
        {    
            return Ok("Protected area");
        }

        // POST api/auth/login
        [AllowAnonymous]
        [HttpPost("login")]
        [ProducesResponseType(typeof(ApiResponseObject<SimpleUserModel>), 204)]
        [ProducesResponseType(typeof(ApiResponse), 400)]
        public async Task<object> Post([FromBody] CredentialsViewModel credentials)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new ApiResponse{ModelState = ModelState, Status = false});
            }
            var result =
                await _signInManager.PasswordSignInAsync(credentials.UserName, credentials.Password, false, false);
            if (result.Succeeded)
            {
                var appUser = _userManager.Users.SingleOrDefault(r => r.UserName == credentials.UserName);
                var token = await JwtFactory.GenerateJwtToken(credentials.UserName, appUser, _configuration);
                var userModel = new SimpleUserModel
                {
                    Email = appUser.Email,
                    FirstName = appUser.FirstName,
                    LastName = appUser.LastName,
                    EmailIsConfirmed = appUser.EmailConfirmed
                };
                return Ok(new ApiResponseObject<SimpleUserModel>{Object = userModel, Status = true});
            }
            return BadRequest("INVALID_LOGIN_ATTEMPT");
        }
    }


}
