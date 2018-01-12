using Business.AnnouncementsRepo;
using Data.Domain;
using FluentAssertions;
using IntegrationTests.Base;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Text;

namespace IntegrationTests
{
    [TestClass]
    public class AnnouncementRepositoryTests: BaseIntegrationTest
    {
        private readonly ILoggerFactory _loggerFactory = new LoggerFactory();

        [TestMethod]
        public void Given_Announcements_When_GetAnnouncementIsCalled_Then_ShouldReturnZeroAnnouncements()
        {
            RunOnDatabase(context =>
            {
                //ARRANGE
                var announcementRepository = new AnnouncementsRepository(context, _loggerFactory);

                //ACT
                var announcements = announcementRepository.GetAll();
                var counter = announcements.Result.Count;

                //ASSERT
                counter.Should().Be(0);
            });
        }

        [TestMethod]
        public void Given_Announcements_When_NewAnnuncementIsAdded_Then_ShouldHaveOneAnnouncementInDatabase()
        {
            RunOnDatabase(async context =>
            {
                var announcementsRepository = new AnnouncementsRepository(context, _loggerFactory);
                var announcement = await announcementsRepository.Add(new Announcement
                {
                    AdminId = "1",
                    PublishDate = DateTime.Now,
                    Title = "Anunt",
                    Body = "anunt1"

                });

                var result = announcementsRepository.GetAll();

                result.Should().NotBe(null);
            });

        }

        [TestMethod]
        public void Given_AnnocementRepo_When_GeyyingAnnoucementWith3Records_Then_NumOfRecordShouldBe3()
        {
            RunOnDatabase(async context =>
            {
                var repository = new AnnouncementsRepository(context, _loggerFactory);
                var announcement = await repository.Add(

                    new Announcement { AdminId = "2", PublishDate = DateTime.Now, Title = "Anunt2", Body = "vacantaa" }

                    );
                var announcement2 = await repository.Add(

                    new Announcement { AdminId = "3", PublishDate = DateTime.Now, Title = "Anunt3", Body = "vacantaaa" }

                    );

                var result = repository.GetAll();
                result.Should().Be(expected: 2);
            });
        }

        [TestMethod]
        public void Given_AnnouncementRepo_When_GettingStockById()
        {
            RunOnDatabase(async context =>
            {
                var repository = new AnnouncementsRepository(context, _loggerFactory);
                var announcement = await repository.Add(
                    new Announcement { AdminId = "1", PublishDate = DateTime.Now, Title = "Anunt", Body = "Vacantaaa" });

                var what = repository.GetById(announcement.Id);
                //  what.Id.Should().Be(announcement.Id);
            }
            );
        }

        [TestMethod]
        public void Given_AnnouncementRepo_When_EditingAnnouncementRemove1Record_Then_NumOfRecordsShouldBe1()
        {
            RunOnDatabase(async context =>
            {
                var repository = new AnnouncementsRepository(context, _loggerFactory);
                var announcement = await repository.Add(

                    new Announcement { AdminId = "2", PublishDate = DateTime.Now, Title = "Anunt2", Body = "vacantaa" }

                    );
                var announcement2 = await repository.Add(

                    new Announcement { AdminId = "3", PublishDate = DateTime.Now, Title = "Anunt3", Body = "vacantaaa" }

                    );

                var announcemnt = await repository.Edit(new Announcement { AdminId = "2", PublishDate = DateTime.Now, Title = "Anunt2", Body = "vacantaa" });

                var result = repository.GetAll();
                result.Should().Be(1);
            });

        }

        [TestMethod]
        public void Given_AnnoncementRepo_When_RemovingAnnouncement_Then_NumOfAnnouncementShouldBe0()
        {

            RunOnDatabase(async context =>
            {
                var repository = new AnnouncementsRepository(context, _loggerFactory);
                var announcement = await repository.Add(new Announcement
                {
                    AdminId = "1",
                    PublishDate = DateTime.Now,
                    Title = "Anunt",
                    Body = "anunt1"

                });

                await repository.Delete(announcement.Id);
                var result = repository.GetAll();

                result.Should().Be(0);
            });
        }
    }
}
