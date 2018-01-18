using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Business.CandidatesRepo;
using Business.RepartitionRepo;
using Data.Domain;
using FluentAssertions;
using IntegrationTests.Base;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NUnit.Framework;

namespace IntegrationTests
{
  [TestFixture]
  public class RepartitionRepositoryTests : BaseIntegrationTest
  {
    private readonly ILoggerFactory _loggerFactory = new LoggerFactory();

    [Test]
    public void Given_RepartitionRepo_When_GenerateRepartitionIsCalled_Then_ResultIsTrue()
    {
      RunOnDatabase(async context =>
      {
        //Arrange
        var candidateRepo = new CandidateRepository(context, _loggerFactory);
        var repartitionRepo = new RepartitionRepository(context, _loggerFactory, candidateRepo);
        var config = GenerateConfiguration();

        //Act
        await PopulateCandidateRepo(candidateRepo);
        var res = await repartitionRepo.GenerateRepartition(config);

        //Assert
        res.Should().Be(true);
      });
    }

    [Test]
    public void Given_RepartitionRepo_When_GetCandidateRepartitionIsCalled_Then_ValidRepartitionIsReturned()
    {
      RunOnDatabase(async context =>
      {
        //Arrange
        var candidateRepo = new CandidateRepository(context, _loggerFactory);
        var repartitionRepo = new RepartitionRepository(context, _loggerFactory, candidateRepo);
        var config = GenerateConfiguration();

        //Act
        await PopulateCandidateRepo(candidateRepo);
        await repartitionRepo.GenerateRepartition(config);
        var res = await repartitionRepo.GetCandidateRepartition("candidate1@gmail.com");

        //Assert
        res.ApprovedCandidateEmail.Should().Be("candidate1@gmail.com");
      });
    }

    [Test]
    public void Given_RepartitionRepo_When_GetCandidatesPageAsyncIsCalled_Then_ValidRepartitionsAreReturned()
    {
      RunOnDatabase(async context =>
      {
        //Arrange
        var candidateRepo = new CandidateRepository(context, _loggerFactory);
        var repartitionRepo = new RepartitionRepository(context, _loggerFactory, candidateRepo);
        var config = GenerateConfiguration();

        //Act
        await PopulateCandidateRepo(candidateRepo);
        await repartitionRepo.GenerateRepartition(config);
        var res = await repartitionRepo.GetCandidatesPageAsync("C1");

        //Assert
        res.TotalRecords.Should().Be(10);
      });
    }

    private RepartitionConfiguration GenerateConfiguration()
    {
      return new RepartitionConfiguration
      {
        AvailableClassrooms = new List<Classroom>
        {
          new Classroom
          {
            Capacity = 10,
            Name = "C1"
          },
          new Classroom
          {
            Capacity = 10,
            Name = "C2"
          },
          new Classroom
          {
            Capacity = 10,
            Name = "C3"
          }
        },
        ExamTime = DateTime.Now
      };
    }

    private async Task PopulateCandidateRepo(CandidateRepository repository)
    {
      for (var i = 0; i < 30; i++)
      {
        if (i < 10)
        {
          var candidate = new Candidate
          {
            Approved = true,
            CNP = "12341423523523",
            Completed = true,
            Email = "candidate" + i + "@gmail.com",
            FirstName = "Candi",
            LastName = "date",
            School = "yes",
            Subject = "Mathematics"
          };
          await repository.AddAsync(candidate);
        }
        else if (i < 20)
        {
          var candidate = new Candidate
          {
            Approved = true,
            CNP = "12341423523523",
            Completed = true,
            Email = "candidate" + i + i + "@gmail.com",
            FirstName = "Candi",
            LastName = "date",
            School = "yes",
            Subject = "Informatics (Pascal)"
          };
          await repository.AddAsync(candidate);
        }
        else
        {
          var candidate = new Candidate
          {
            Approved = true,
            CNP = "12341423523523",
            Completed = true,
            Email = "candidate" + i + i + i + "@gmail.com",
            FirstName = "Candi",
            LastName = "date",
            School = "yes",
            Subject = "Informatics (C/C++)"
          };
          await repository.AddAsync(candidate);
        }
      }
    }
  }
}
