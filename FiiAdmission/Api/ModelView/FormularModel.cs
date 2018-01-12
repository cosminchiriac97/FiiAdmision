using Api.ModelView.Validations;
using FluentValidation.Attributes;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.ModelView
{
    [Validator(typeof(FormularModelValidator))]
    public class FormularModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FatherFirstName { get; set; }
        public string MotherFirstName { get; set; }
        public string CNP { get; set; }
        public DateTime Birthday { get; set; }
        public string Country { get; set; }
        public string County { get; set; }
        public string Locality { get; set; }
        public string Citizenship { get; set; }
        public string Nationality { get; set; }
        public string Ethnicity { get; set; }
        public string NativeLanguage { get; set; }
        //pt poze si fisiere
        public IFormFile PhotoBacDiploma { get; set; }
        public IFormFile PhotoCI { get; set; }
        public IFormFile PhotoTranscript { get; set; }
        public IFormFile PhotoReceipt { get; set; }
        public string Files { get; set; }

        public string HighSchool { get; set; }
        public string HighSchoolCountry { get; set; }
        public string HighSchoolLocality { get; set; }
        public string HighSchoolCounty { get; set; }
        public string Profile { get; set; }
        public int LengthOfStudies { get; set; }
        public int GraduationYear { get; set; }
        public string FormOfEducation { get; set; }
        public string BacSeries { get; set; }
        public int BacNumber { get; set; }
        public string BacIssuedBy { get; set; }
        public DateTime BacReleaseDate { get; set; }
        //foaie matricola
        public string TranscriptNumber { get; set; }

        public string UniversityName { get; set; }
        public string FacultyName { get; set; }
        public string Specialization { get; set; }
        public string DegreeSeries { get; set; }
        public int DegreeNumber { get; set; }
        public string DegreeIssuedBy { get; set; }
        public DateTime DegreeReleaseDate { get; set; }
        public string DegreeTranscriptNumber { get; set; }
        public double BacAverage { get; set; }
        public double HighestMark { get; set; }
        public string ExamOption { get; set; }

        public Boolean OrphanedByBothParents { get; set; }
        public Boolean OrphanedByOneParent { get; set; }
        public Boolean ComingFromTheChildrensHome { get; set; }
        public Boolean DerivedFromFamilyPlacement { get; set; }
        public Boolean SingleParentFamily { get; set; }
        public Boolean Disability { get; set; }
        public Boolean AccommodationDuringTheStudies { get; set; }
        public Boolean AccommodationDuringTheTest { get; set; }

    }
}
