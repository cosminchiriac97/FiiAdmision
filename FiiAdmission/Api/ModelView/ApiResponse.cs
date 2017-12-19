using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Api.ModelView
{
    public class ApiResponse
    {
        public bool Status { get; set; }
        public ModelStateDictionary ModelState { get; set; }
    }
}
