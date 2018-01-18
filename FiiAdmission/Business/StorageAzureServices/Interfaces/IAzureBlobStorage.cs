using System;
using Business.StorageAzureServices.Implementation;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace Business.StorageAzureServices.Interfaces
{
    public interface IAzureBlobStorage
    {
        Task<string> DownloadAsync(string blobName);
        Task<Boolean> ExistBlob(string blobName);
        Task DeleteAsync(string blobName);        
        Task UploadAsync(string blobName, Stream stream);  
    }
}