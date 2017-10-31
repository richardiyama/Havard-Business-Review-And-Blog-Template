using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Mvc;
using DigitalAfricaMediumClient.Models;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace DigitalAfricaMediumClient.Controllers
{
    public class AboutController : Controller
    {
        
            //Hosted web API REST Service base url  
            string Baseurl = "http://localhost:49986/";
            public async Task<ActionResult> Index()
            {
                List<About> abouts = new List<About>();

                using (var client = new HttpClient())
                {
                    //Passing service base url  
                    client.BaseAddress = new Uri(Baseurl);

                    client.DefaultRequestHeaders.Clear();
                    //Define request data format  
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                    //Sending request to find web api REST service resource GetAbouts using HttpClient  
                    HttpResponseMessage Res = await client.GetAsync("api/about");

                    //Checking the response is successful or not which is sent using HttpClient  
                    if (Res.IsSuccessStatusCode)
                    {
                        //Storing the response details recieved from web api   
                        var AbResponse = Res.Content.ReadAsStringAsync().Result;

                        //Deserializing the response recieved from web api and storing into the About list  
                        abouts = JsonConvert.DeserializeObject<List<About>>(AbResponse);

                    }
                    //returning the employee list to view  
                    return View(abouts);
                }
            }


        public  ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(About about)
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("http://localhost:49986/api/about");

                //HTTP POST
                var postTask = client.PostAsJsonAsync<About>("about", about);
                postTask.Wait();

                var result = postTask.Result;
                if (result.IsSuccessStatusCode)
                {
                    return RedirectToAction("Index");
                }
            }

            ModelState.AddModelError(string.Empty, "Server Error. Please contact administrator.");

            return View(about);
        }

    }
    }


