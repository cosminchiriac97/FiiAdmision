using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace Business.SignalR
{
    public class Signal : Hub
    {
         public Task Send(string message)
         {
            return Clients.All.InvokeAsync("Send", message);
         }
        
    }
}
