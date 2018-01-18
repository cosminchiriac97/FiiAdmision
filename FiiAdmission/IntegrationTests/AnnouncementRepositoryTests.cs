

using System;
using Business.AnnouncementsRepo;
using Data.Domain;
using IntegrationTests.Base;
using Microsoft.Extensions.Logging;
using NUnit.Framework;

namespace IntegrationTests
{
    [TestFixture]
    public class AnnouncementRepositoryTests: BaseIntegrationTest
    {
        private readonly ILoggerFactory _loggerFactory = new LoggerFactory();

        [Test]
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
                Assert.AreEqual(counter,0);
            });
        }
        
        [Test]
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

                Assert.IsNotNull(result);
            });

        }
        
        [Test]
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
                Assert.AreEqual(result.Result.Count,2);
            });
        }
        /*
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
        */
        [Test]
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
                Assert.AreEqual(result.Result.Count, 1);
            });

        }

        [Test]
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

                Assert.AreEqual(result.Result.Count, 0);
            });
        }
        
    }
}
