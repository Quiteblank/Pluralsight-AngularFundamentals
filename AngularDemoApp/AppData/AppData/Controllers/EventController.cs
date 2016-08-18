using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace AppData.Controllers
{
    public class EventController : ApiController
    {
        public JToken Get(string id = null)
        {
            // Normally it would jsonify the object we return, but in this case we're just reading from a file that already contains JSON data
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            return JObject.Parse(System.IO.File.ReadAllText(path + "../app/data/event/" + id + ".json"));
        }

        public void Post(string id, JObject eventData)
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            System.IO.File.WriteAllText(path + "../app/data/event/" + id + ".json", eventData.ToString(Formatting.None));
        }
    }
}
