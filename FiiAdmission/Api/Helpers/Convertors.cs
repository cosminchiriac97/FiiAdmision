using System.IO;
using Newtonsoft.Json.Linq;

namespace Api.Helpers
{
    public class Convertors
    {
        public static Stream GenerateStreamFromString(JObject s)
        {
            MemoryStream stream = new MemoryStream();
            StreamWriter writer = new StreamWriter(stream);
            writer.Write(s);
            writer.Flush();
            stream.Position = 0;
            return stream;
        }
    }
}