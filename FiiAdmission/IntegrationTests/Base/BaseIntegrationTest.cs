

using System;
using Data.Persistence.ContentDb;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;

namespace IntegrationTests.Base
{
    public abstract class BaseIntegrationTest
    {
        protected virtual bool UseSqlServer => false;

        [SetUp]
        public void TestInitialie()
        {
            DeleteDatabase();
            CreateDatabase();
        }

        [TearDown]
        public void CleanUp()
        {
            DeleteDatabase();
        }

        protected void RunOnDatabase(Action<ContentDbContext> action)
        {
            if (UseSqlServer)
            {
                RunOnSqlServer(action);
            }
            else
            {
                RunOnMemory(action);
            }
        }
        public void RunOnSqlServer(Action<ContentDbContext> databaseAction)
        {
            var connection = @"Server = .\SQLEXPRESS; Database=Stock.Development.Test; Trusted_Connection=True";
            var options = new DbContextOptionsBuilder<ContentDbContext>()
                .UseSqlServer(connection)
                .Options;
            using (var context = new ContentDbContext(options))
            {
                databaseAction(context);
            }
        }
        private void RunOnMemory(Action<ContentDbContext> databaseAction)
        {
            var options = new DbContextOptionsBuilder<ContentDbContext>()
                .UseInMemoryDatabase("FiiAdmissionDb")
                .Options;
            using (var context = new ContentDbContext(options))
            {
                databaseAction(context);
            }
        }

        private void CreateDatabase()
        {
            RunOnDatabase(context => context.Database.EnsureCreated());
        }

        private void DeleteDatabase()
        {
            RunOnDatabase(context => context.Database.EnsureDeleted());
        }
    }
}
