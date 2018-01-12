using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Domain
{
    public class Formular
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
        public string Photos { get; set; }
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

        public Formular(string firstName, string lastName, string fatherFirstName, string motherFirstName, string cNP, DateTime birthday, string country, string county, string locality, string citizenship, string nationality, string ethnicity, string nativeLanguage, string photos, string files, string highSchool, string highSchoolCountry, string highSchoolLocality, string highSchoolCounty, string profile, int lengthOfStudies, int graduationYear, string formOfEducation, string bacSeries, int bacNumber, string bacIssuedBy, DateTime bacReleaseDate, string transcriptNumber, string universityName, string facultyName, string specialization, string degreeSeries, int degreeNumber, string degreeIssuedBy, DateTime degreeReleaseDate, string degreeTranscriptNumber, double bacAverage, double highestMark, string examOption, bool orphanedByBothParents, bool orphanedByOneParent, bool comingFromTheChildrensHome, bool derivedFromFamilyPlacement, bool singleParentFamily, bool disability, bool accommodationDuringTheStudies, bool accommodationDuringTheTest)
        {
            FirstName = firstName;
            LastName = lastName;
            FatherFirstName = fatherFirstName;
            MotherFirstName = motherFirstName;
            CNP = cNP;
            Birthday = birthday;
            Country = country;
            County = county;
            Locality = locality;
            Citizenship = citizenship;
            Nationality = nationality;
            Ethnicity = ethnicity;
            NativeLanguage = nativeLanguage;
            Photos = photos;
            Files = files;
            HighSchool = highSchool;
            HighSchoolCountry = highSchoolCountry;
            HighSchoolLocality = highSchoolLocality;
            HighSchoolCounty = highSchoolCounty;
            Profile = profile;
            LengthOfStudies = lengthOfStudies;
            GraduationYear = graduationYear;
            FormOfEducation = formOfEducation;
            BacSeries = bacSeries;
            BacNumber = bacNumber;
            BacIssuedBy = bacIssuedBy;
            BacReleaseDate = bacReleaseDate;
            TranscriptNumber = transcriptNumber;
            UniversityName = universityName;
            FacultyName = facultyName;
            Specialization = specialization;
            DegreeSeries = degreeSeries;
            DegreeNumber = degreeNumber;
            DegreeIssuedBy = degreeIssuedBy;
            DegreeReleaseDate = degreeReleaseDate;
            DegreeTranscriptNumber = degreeTranscriptNumber;
            BacAverage = bacAverage;
            HighestMark = highestMark;
            ExamOption = examOption;
            OrphanedByBothParents = orphanedByBothParents;
            OrphanedByOneParent = orphanedByOneParent;
            ComingFromTheChildrensHome = comingFromTheChildrensHome;
            DerivedFromFamilyPlacement = derivedFromFamilyPlacement;
            SingleParentFamily = singleParentFamily;
            Disability = disability;
            AccommodationDuringTheStudies = accommodationDuringTheStudies;
            AccommodationDuringTheTest = accommodationDuringTheTest;
        }
    }
}
