using System.Security.Claims;
using System.Threading.Tasks;
using Api.Auth;
using Api.Helpers;
using Data.Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Api.ModelView;
using Microsoft.Extensions.Options;

namespace Api.Controllers
{
    [AllowAnonymous]
  [Route("api/[controller]")]
  public class AuthController : Controller
  {
    private readonly UserManager<AppUser> _userManager;
    private readonly JsonSerializerSettings _serializerSettings;
    private readonly IJwtFactory _jwtFactory;
    private readonly JwtIssuerOptions _jwtOptions;
    private readonly IConfiguration _configuration;

    public AuthController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager,
      IConfiguration configuration, IJwtFactory factory, IOptions<JwtIssuerOptions> jwtOptions)
    {
      _userManager = userManager;
      _configuration = configuration;

      _serializerSettings = new JsonSerializerSettings
      {
        Formatting = Formatting.Indented
      };
      _jwtFactory = factory;
      _jwtOptions = jwtOptions.Value;
    }

    // POST api/auth/login
    [HttpPost("login")]
    [ProducesResponseType(typeof(ApiResponseObject<SimpleUserModel>), 204)]
    [ProducesResponseType(typeof(ApiResponse), 400)]
    public async Task<object> Login([FromBody] CredentialsViewModel credentials)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var identity = await GetClaimsIdentity(credentials.UserName, credentials.Password);
      if (identity == null)
      {
        return BadRequest(Errors.AddErrorToModelState("login_failure", "Invalid username or password.", ModelState));
      }

      var jwt = await Tokens.GenerateJwt(identity, _jwtFactory, credentials.UserName, _jwtOptions,
        new JsonSerializerSettings {Formatting = Formatting.Indented});
      var appUser = await _userManager.FindByEmailAsync(credentials.UserName);
      var userModel = new SimpleUserModel
      {
        Email = appUser.Email,
        FirstName = appUser.FirstName,
        LastName = appUser.LastName,
        Id = appUser.Id,
        EmailIsConfirmed = appUser.EmailConfirmed,
        Token = jwt
      };
      return Ok(userModel);
    }

    private async Task<ClaimsIdentity> GetClaimsIdentity(string userName, string password)
    {
      if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(password))
        return await Task.FromResult<ClaimsIdentity>(null);

      // get the user to verifty
      var userToVerify = await _userManager.FindByNameAsync(userName);

      if (userToVerify == null) return await Task.FromResult<ClaimsIdentity>(null);

      // check the credentials
      if (await _userManager.CheckPasswordAsync(userToVerify, password))
      {
        return await Task.FromResult(new ClaimsIdentity(await _userManager.GetClaimsAsync(userToVerify)));
      }

      // Credentials are invalid, or account doesn't exist
      return await Task.FromResult<ClaimsIdentity>(null);
    }
  }
}