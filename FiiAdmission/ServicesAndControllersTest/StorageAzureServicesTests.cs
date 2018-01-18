using System;
using System.Collections.Generic;
using System.IO;
using Api.Helpers;
using Business.StorageAzureServices.Implementation;
using Business.StorageAzureServices.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json.Linq;

namespace ServicesAndControllersTest
{
    [TestClass]
    public class StorageAzureServicesTests
    {
        private IAzureBlobStorage _sut;
        private IConfiguration _config;

        [TestInitialize]
        public void Initialize()
        {
            _config = new ConfigurationBuilder()
                .AddJsonFile("secrets.json")
                .Build();
            _sut = new AzureBlobStorage(
                settings: new AzureBlobSetings(
                    storageAccount: _config["Blob_StorageAccount"],
                    storageKey: _config["Blob_StorageKey"],
                    containerName: _config["Blob_ContainerName"])
             );
        }

        [TestCleanup]
        public void Cleanup()
        {
            _config = null;
            _sut = null;
        }

        [TestMethod]
        public async void Given_AString_WhenIsUploadInStorage_Then_Should_BeThere()
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
            Assert.AreEqual(_sut.ExistBlob("nameTest"),true);
        }

        [TestMethod]
        public async void Given_The_Previous_Blob_Should_Be_Equal_To_the_One_Downloaded()
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
            var jsonObject = JObject.Parse(json);
            Assert.Equals(jsonObject, testJObject);
        }

        [TestMethod]
        public async void GivenTheName_OfAPrevious_Blob_Wiping_It_Then_Should_Not_Exist_Anymore()
        {
            await _sut.DeleteAsync("nameTest");
            Assert.AreEqual(_sut.ExistBlob("nameTest"), false);
        }
    }
}
