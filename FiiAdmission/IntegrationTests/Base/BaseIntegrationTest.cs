using Data.Persistence.ContentDb;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace IntegrationTests.Base
{
    public abstract class BaseIntegrationTest
    {
        private string ConnectionString= "Server=tcp:fiiadmission.database.windows.net,1433;Initial Catalog=ContentDatabase;Persist Security Info=False;User ID=cosmin;Password=Kl97lpo69!;MultipleActiveResultSets=True;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

        [TestInitialize]
        public virtual void TestInitialize()
        {
            DestroyDatabase();
            CreateDatabase();
        }

        [TestCleanup]
        public virtual void TestCleanup()
        {
            DestroyDatabase();
        }

        protected void RunOnDatabase(Action<ContentDbContext> action)
        {
            RunOnSqlServer(action);
        }

        private void RunOnSqlServer(Action<ContentDbContext> action)
        {
            var options = new DbContextOptionsBuilder<ContentDbContext>().UseSqlServer(ConnectionString).Options;

            using (var context = new ContentDbContext(options))
            {
                action(context);
            }
        }

        private void DestroyDatabase()
        {
            RunOnDatabase(context => context.Database.EnsureDeleted());
        }

        private void CreateDatabase()
        {
            RunOnDatabase(context => context.Database.EnsureCreated());
                }
    }
}
