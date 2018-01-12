using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.ModelView.Validations
{
    public class FormularModelValidator : AbstractValidator<FormularModel>
    {
        public FormularModelValidator()
        {
            RuleFor(st => st.FirstName).NotEmpty().WithMessage("First name cannot be empty!");
            RuleFor(st => st.LastName).NotEmpty().WithMessage("Last name cannot be empty!");
            RuleFor(st => st.FatherFirstName).NotEmpty().WithMessage("Father first name cannot be empty!");
            RuleFor(st => st.MotherFirstName).NotEmpty().WithMessage("Mother first name cannot be empty!");
            RuleFor(st => st.Birthday).NotEmpty().WithMessage("Birthday cannot be empty!");
            RuleFor(st => st.Country).NotEmpty().WithMessage("Country cannot be empty");
            RuleFor(st => st.County).NotEmpty().WithMessage("county cannot be empty!");
            RuleFor(st => st.Locality).NotEmpty().WithMessage("Locality cannot be empty!");
            RuleFor(st => st.Citizenship).NotEmpty().WithMessage("Citizenship cannot be empty!");
            RuleFor(st => st.Nationality).NotEmpty().WithMessage("Nationality cannot be empty!");
            RuleFor(st => st.Ethnicity).NotEmpty().WithMessage("Ethnicity cannot be empty!");
            RuleFor(st => st.NativeLanguage).NotEmpty().WithMessage("Native language cannot be empty!");
            RuleFor(st => st.HighSchool).NotEmpty().WithMessage("High school cannot be empty!");
            RuleFor(st => st.HighSchoolCountry).NotEmpty().WithMessage("High school country cannot be empty!");
            RuleFor(st => st.HighSchoolCounty).NotEmpty().WithMessage("High school county cannot be empty!");
            RuleFor(st => st.HighSchoolLocality).NotEmpty().WithMessage("High school locality cannot be empty!");
            RuleFor(st => st.Profile).NotEmpty().WithMessage("Profile cannot be empty!");
            RuleFor(st => st.LengthOfStudies).NotEmpty().Equal(4).WithMessage("Lenght of studies cannot be empty and different from 4!");
            RuleFor(st => st.GraduationYear).NotEmpty().WithMessage("Graduation year cannot be empty!");
            RuleFor(st => st.FormOfEducation).NotEmpty().WithMessage("Form of education cannot be empty!");
            RuleFor(st => st.BacSeries).NotEmpty().WithMessage("Bac series cannot be empty!");
            RuleFor(st => st.BacNumber).NotEmpty().WithMessage("Bac number cannot be empty!");
            RuleFor(st => st.BacIssuedBy).NotEmpty().WithMessage("Bac issued by cannot be empty!");
            RuleFor(st => st.BacReleaseDate).NotEmpty().WithMessage("Bac realese date cannot be empty!");
            RuleFor(st => st.TranscriptNumber).NotEmpty().WithMessage("Transcript number cannot be empty!");
            RuleFor(st => st.BacAverage).NotEmpty().WithMessage("Bac average cannot be empty!");
            RuleFor(st => st.HighestMark).NotEmpty().WithMessage("Highest degree cannot be empty!");
            RuleFor(st => st.ExamOption).NotEmpty().WithMessage("Exam option cannot be empty!");


        }
    }
}
