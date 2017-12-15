using Services.StorageAzure.Implementation;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace Services.StorageAzure.Interfaces
{
    public interface IAzureBlobStorage
    {
        Task<MemoryStream> DownloadAsync(string blobName);
        Task DownloadAsync(string blobName, string path);
        Task<List<AzureBlobItem>> ListAsync();
        Task<List<string>> ListFoldersAsync();
        Task UploadAsync(string blobName, Stream stream);
        Task UploadAsync(string blobName, string filePath);
    }
}