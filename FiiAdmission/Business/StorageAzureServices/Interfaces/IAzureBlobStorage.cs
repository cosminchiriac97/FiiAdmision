using Business.StorageAzureServices.Implementation;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace Business.StorageAzureServices.Interfaces
{
    public interface IAzureBlobStorage
    {
        Task<string> DownloadAsync(string blobName);
        Task DeleteAsync(string blobName);
        Task DownloadAsync(string blobName, string path);
        Task<List<AzureBlobItem>> ListAsync();
        Task<List<string>> ListFoldersAsync();
        Task UploadAsync(string blobName, Stream stream);
        Task UploadAsync(string blobName, string filePath);
    }
}