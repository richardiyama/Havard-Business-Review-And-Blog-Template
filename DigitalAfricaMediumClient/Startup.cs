using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DigitalAfricaMediumClient.Startup))]
namespace DigitalAfricaMediumClient
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
