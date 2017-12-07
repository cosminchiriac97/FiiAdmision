using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Data.Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Prezentation.Auth;
using Prezentation.Helpers;
using Prezentation.ModelView;

namespace Prezentation.Controllers
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
