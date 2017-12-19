using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Api.ModelView
{
    public class ApiResponseObject<T>
    {
        public bool Status { get; set; }
        public T Object { get; set; }
        public ModelStateDictionary ModelState { get; set; }
    }
}
