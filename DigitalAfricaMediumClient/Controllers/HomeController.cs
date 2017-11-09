using DigitalAfricaMediumClient.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace DigitalAfricaMediumClient.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Home()
        {
            return View();
        }

        public ActionResult Futuretv()
        {
            ViewBag.Message = "Your Future Tv page.";

            return View();
        }

        public ActionResult Smecommunity()
        {
            ViewBag.Message = "Your Sme community page.";

            return View();
        }

        public ActionResult Streetdigital()
        {
            ViewBag.Message = "Your street digital page.";

            return View();
        }
        //Hosted web API REST Service base url  
        string Baseurl = "http://localhost:49986/";
        public async Task<ActionResult> About()
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

        public ActionResult Naijabusinessreview()
        {
            ViewBag.Message = "Your Naija Business Review page.";

            return View();
        }

        public ActionResult TheLatest()
        {
            ViewBag.Message = "The Latest page.";

            return View();
        }

        public ActionResult MagazineArchive()
        {
            ViewBag.Message = "The Magazine page.";

            return View();
        }

        public ActionResult MagazineTableContent()
        {
            ViewBag.Message = "The Magazine Table Content page.";

            return View();
        }


        public ActionResult MyLibrary()
        {
            ViewBag.Message = "The Library page.";

            return View();
        }

        public ActionResult MostPopular()
        {
            ViewBag.Message = "Most Popular page.";

            return View();
        }

        public ActionResult AllTopics()
        {
            ViewBag.Message = "All Topics page.";

            return View();
        }

        public ActionResult ParticularTopics()
        {
            ViewBag.Message = "Particular Topic";

            return View();
        }

        public ActionResult LatestSingleTopic()
        {

            ViewBag.Message = "Latest Single Topic";

            return View();
        }

        public ActionResult SingleTopicFromTheStore()
        {
            ViewBag.Message = "From the Store";

            return View();
        }

        public ActionResult PopularTopics()
        {

            ViewBag.Message = "Popular Topics";

            return View();
        }
        public ActionResult Video()
        {
            ViewBag.Message = "Video page.";

            return View();
        }

        public ActionResult NbrProducts()
        {
            ViewBag.Message = "Products page.";

            return View();
        }

        public ActionResult SubscriberExclusive()
        {
            ViewBag.Message = "Subscriber page.";

            return View();
        }
        public ActionResult Subscribe()
        {
            ViewBag.Message = "Subscribe page.";

            return View();
        }

        public ActionResult Dmaconference()
        {
            ViewBag.Message = "Your DMA Conference page.";

            return View();
        }

        public ActionResult Blog()
        {
            ViewBag.Message = "Your Blog page.";

            return View();
        }
    }
}