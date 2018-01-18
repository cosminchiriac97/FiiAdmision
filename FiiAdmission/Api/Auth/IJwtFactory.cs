using System.Security.Claims;
using System.Threading.Tasks;

namespace Api.Auth
{
    public interface IJwtFactory
  {
    Task<string> GenerateEncodedToken(string userName, ClaimsIdentity identity);
  }
}
