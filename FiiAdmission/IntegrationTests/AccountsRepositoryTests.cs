

using System;
using Business.AccountsRepo;
using Data.Domain;
using Data.Persistence.ApplicationUserDb;
using FluentAssertions;
using IntegrationTests.Base;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NUnit.Framework;

namespace IntegrationTests
{
  [TestFixture]
  public class AccountsRepositoryTests : BaseIntegrationTest
  {
    private readonly ILoggerFactory _loggerFactory = new LoggerFactory();

    [Test]
    public void Given_AccountsRepo_When_GetAllIsCalled_Then_CountIs0()
    {
      RunOnDatabase(async context =>
      {
        //Arrange
        var options = new DbContextOptionsBuilder<ApplicationUserDbContext>()
          .UseInMemoryDatabase("FiiAdmissionDb")
          .Options;
        var newContext = new ApplicationUserDbContext(options);
        var accountsRepository = new JobSeekerRepository(newContext);
        
        //Act
        
        //Assert
        var res = await accountsRepository.GetAll();
        res.Count.Should().Be(0);
      });
    }

    [Test]
    public void Given_AccountsRepo_When_AddIsCalled_Then_CountIs1()
    {
      RunOnDatabase(async context =>
      {
        //Arrange
        var options = new DbContextOptionsBuilder<ApplicationUserDbContext>()
          .UseInMemoryDatabase("FiiAdmissionDb")
          .Options;
        var newContext = new ApplicationUserDbContext(options);
        var accountsRepository = new JobSeekerRepository(newContext);
        var jobSeeker = new JobSeeker
        {
          Id = Guid.NewGuid(),
          Identity = new AppUser
          {
            FirstName = "Someone",
            LastName = "Anyone"
          },
          IdentityId = Guid.NewGuid().ToString()
        };

        //Act
        await accountsRepository.AddAsync(jobSeeker);

        //Assert
        var res = await accountsRepository.GetAll();
        res.Count.Should().Be(1);
      });
    }
  }
}
