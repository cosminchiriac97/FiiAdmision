using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Api.ModelView
{
    public class ApiResponse
    {
        public bool Status { get; set; }
        public ModelStateDictionary ModelState { get; set; }
    }
}
