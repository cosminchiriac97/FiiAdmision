

using System.IO;
using System.Threading.Tasks;
using Api.Helpers;
using Business.StorageAzureServices.Implementation;
using Business.StorageAzureServices.Interfaces;
using Newtonsoft.Json.Linq;
using NUnit.Framework;
using Assert = NUnit.Framework.Assert;

namespace ServicesAndControllersTest
{
    [TestFixture]
    public class StorageAzureServicesTests
    {
        private IAzureBlobStorage _sut;
        
        [SetUp]
        public void Initialize()
        {
            _sut = new AzureBlobStorage(
                settings: new AzureBlobSetings(
                    storageAccount: "fiiadmision",
                    storageKey: "LkSxXYlV+gFnzEtBDNNZx4VroRV8j8nbc5RfA5gnYZX17T+lmfGeT+HRkTqp8HSGjvWdz08zeDw36qrEqoEmQw==",
                    containerName: "images")
             );
        }

        [TearDown]
        public void Cleanup()
        {
          
            _sut = null;
        }

        [Test]
        public async Task Given_AString_WhenIsUploadInStorage_Then_Should_BeThere()
        {

            //Assert
            JObject testJObject = new JObject
            {
                    { "Cpu", "Intel" },
                    { "Memory", 32 },
                    {
                            "Drives", new JArray
                            {
                                    "DVD",
                                    "SSD"
                                }
                        }
                };

            using (var memoryStream = new MemoryStream())
            {
                using (var s = Convertors.GenerateStreamFromString(testJObject))
                {
                    await s.CopyToAsync(memoryStream);
                    await _sut.UploadAsync("nameTest", memoryStream);
                }
            }
            Assert.AreEqual(await _sut.ExistBlob("nameTest"),true);
        }

        [Test]
        public async Task Given_The_Previous_Blob_Should_Be_Equal_To_the_One_Downloaded()
        {

            //Assert
            JObject testJObject = new JObject
            {
                { "Cpu", "Intel" },
                { "Memory", 32 },
                {
                    "Drives", new JArray
                    {
                        "DVD",
                        "SSD"
                    }
                }
            };

            var json = await _sut.DownloadAsync("nameTest");
           
            Assert.NotNull(json);
        }

        [Test]
        public async Task GivenTheName_OfAPrevious_Blob_Wiping_It_Then_Should_Not_Exist_Anymore()
        {
            await _sut.DeleteAsync("nameTest");
            Assert.AreEqual(await _sut.ExistBlob("nameTest"), false);
        }
    }
}
