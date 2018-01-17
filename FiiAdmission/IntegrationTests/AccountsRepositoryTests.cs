using System;
using System.Collections.Generic;
using System.Text;
using Business.AccountsRepo;
using Data.Domain;
using Data.Persistence.ApplicationUserDb;
using Data.Persistence.ContentDb;
using FluentAssertions;
using IntegrationTests.Base;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace IntegrationTests
{
  [TestClass]
  public class AccountsRepositoryTests : BaseIntegrationTest
  {
    private readonly ILoggerFactory _loggerFactory = new LoggerFactory();

    [TestMethod]
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

    [TestMethod]
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
