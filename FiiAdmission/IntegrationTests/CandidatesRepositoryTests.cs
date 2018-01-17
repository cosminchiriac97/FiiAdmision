using System;
using System.Collections.Generic;
using System.Text;
using Business.CandidatesRepo;
using Data.Domain;
using FluentAssertions;
using IntegrationTests.Base;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace IntegrationTests
{
  [TestClass]
  public class CandidatesRepositoryTests : BaseIntegrationTest
  {

    private readonly ILoggerFactory _loggerFactory = new LoggerFactory();

    [TestMethod]
    public void Given_CandidateRepo_When_GetAllIsCalled_Then_CountIs0()
    {
      RunOnDatabase(async context =>
      {
        //Arrange
        var candidateRepo = new CandidateRepository(context, _loggerFactory);

        //Act
        var res = await candidateRepo.GetAll();

        //Assert
        res.Count.Should().Be(0);
      });
    }

    [TestMethod]
    public void Given_CandidateRepo_When_AddAsyncIsCalled_Then_MailValueShouldBeCorrect()
    {
      RunOnDatabase(async context =>
      {
        //Arrange
        var candidateRepo = new CandidateRepository(context, _loggerFactory);
        var candidate = new Candidate
        {
          Approved = false,
          CNP = "12341423523523",
          Completed = false,
          Email = "candidate@gmail.com",
          FirstName = "Candi",
          LastName = "date",
          School = "yes",
          Subject = "matematica"
        };

        //Act
        var res = await candidateRepo.AddAsync(candidate);

        //Assert
        res.Email.Should().Be("candidate@gmail.com");
      });
    }

    [TestMethod]
    public void Given_CandidateRepo_When_GetFormByEmailIsCalled_Then_CorrectCandidateIsReturned()
    {
      RunOnDatabase(async context =>
      {
        //Arrange
        var candidateRepo = new CandidateRepository(context, _loggerFactory);
        var candidate = new Candidate
        {
          Approved = false,
          CNP = "12341423523523",
          Completed = false,
          Email = "candidate@gmail.com",
          FirstName = "Candi",
          LastName = "date",
          School = "yes",
          Subject = "matematica"
        };

        //Act
        await candidateRepo.AddAsync(candidate);
        var res = await candidateRepo.GetByFormEmail("candidate@gmail.com");

        //Assert
        res.Email.Should().Be("candidate@gmail.com");
      });
    }

    [TestMethod]
    public void Given_CandidateRepo_When_GetApprovedCandidatesIsCalled_Then_CountIs1()
    {
      RunOnDatabase(async context =>
      {
        //Arrange
        var candidateRepo = new CandidateRepository(context, _loggerFactory);
        var candidate = new Candidate
        {
          Approved = false,
          CNP = "12341423523523",
          Completed = false,
          Email = "candidate@gmail.com",
          FirstName = "Candi",
          LastName = "date",
          School = "yes",
          Subject = "matematica"
        };
        var candidate2 = new Candidate
        {
          Approved = true,
          CNP = "12341423523523",
          Completed = true,
          Email = "candidate2@gmail.com",
          FirstName = "Candi2",
          LastName = "date2",
          School = "yes",
          Subject = "matematica"
        };

        //Act
        await candidateRepo.AddAsync(candidate);
        await candidateRepo.AddAsync(candidate2);
        var res = await candidateRepo.GetApprovedCandidates();

        //Assert
        res.Count.Should().Be(1);
      });
    }

    [TestMethod]
    public void Given_CandidateRepo_When_GetApprovedCandidatesNumberIsCalled_Then_CountIs1()
    {
      RunOnDatabase(async context =>
      {
        //Arrange
        var candidateRepo = new CandidateRepository(context, _loggerFactory);
        var candidate = new Candidate
        {
          Approved = false,
          CNP = "12341423523523",
          Completed = false,
          Email = "candidate@gmail.com",
          FirstName = "Candi",
          LastName = "date",
          School = "yes",
          Subject = "matematica"
        };
        var candidate2 = new Candidate
        {
          Approved = true,
          CNP = "12341423523523",
          Completed = true,
          Email = "candidate2@gmail.com",
          FirstName = "Candi2",
          LastName = "date2",
          School = "yes",
          Subject = "matematica"
        };

        //Act
        await candidateRepo.AddAsync(candidate);
        await candidateRepo.AddAsync(candidate2);
        var res = candidateRepo.GetApprovedCandidatesNumber();

        //Assert
        res.Should().Be(1);
      });
    }

    [TestMethod]
    public void Given_CandidateRepo_When_GetCandidatesPageAsyncIsCalled_Then_CountIs1()
    {
      RunOnDatabase(async context =>
      {
        //Arrange
        var candidateRepo = new CandidateRepository(context, _loggerFactory);
        var candidate = new Candidate
        {
          Approved = false,
          CNP = "12341423523523",
          Completed = false,
          Email = "candidate@gmail.com",
          FirstName = "Candi",
          LastName = "date",
          School = "yes",
          Subject = "matematica"
        };
        var candidate2 = new Candidate
        {
          Approved = true,
          CNP = "12341423523523",
          Completed = true,
          Email = "candidate2@gmail.com",
          FirstName = "Candi2",
          LastName = "date2",
          School = "yes",
          Subject = "matematica"
        };
        var candidate3 = new Candidate
        {
          Approved = true,
          CNP = "12341423523523",
          Completed = true,
          Email = "candidate3@gmail.com",
          FirstName = "Candi3",
          LastName = "date3",
          School = "yes",
          Subject = "matematica"
        };

        //Act
        await candidateRepo.AddAsync(candidate);
        await candidateRepo.AddAsync(candidate2);
        await candidateRepo.AddAsync(candidate3);
        var res = await candidateRepo.GetCandidatesPageAsync(1, 1);

        //Assert
        
      });
    }
  }
}
