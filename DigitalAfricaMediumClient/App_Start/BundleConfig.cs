using System.Web;
using System.Web.Optimization;

namespace DigitalAfricaMediumClient
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-1.11.2.min.js",
                        "~/Scripts/jquery.magnific-popup.min.js",
                        "~/Scripts/jquery.mailchimp.js",
                        "~/Scripts/jquery.fittext.js",
                         "~/Scripts/jquery.textillate.js",
                        "~/Scripts/jquery.lettering.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.min.js",
                      "~/Scripts/jqBootstrapValidation.js",
                      "~/Scripts/imagesloaded.pkgd.min.js",
                      "~/Scripts/imagesloaded.js",
                      "~/Scripts/isotope.pkgd.min.js",
                      "~/Scripts/ParallaxScrolling.js",
                      "~/Scripts/wow.min.js",
                      "~/Scripts/curvycorners.js",
                      "~/Scripts/main.js"
                      ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.min.css",
                      "~/Content/normalize.css",
                      "~/Content/animate.css",
                      "~/Content/style.css",
                      "~/Content/iline-icons.css",
                       "~/Content/responsive.css",
                      "~/Content/magnific-popup.css"));
        }
    }
}
