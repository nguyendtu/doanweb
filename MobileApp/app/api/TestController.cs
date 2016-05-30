using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MobileApp.app
{
    [RoutePrefix("api/test")]
    public class TestController : ApiController
    {
        // GET api/<controller>
        [Route("")]
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        [Route("{id:int}")]
        [HttpGet]
        public Test Get(int id)
        {

            Test t = new Test();
            t.Id = 1;
            t.Name = "Nguyen Duy Tu";

            return t;
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }

    }
}