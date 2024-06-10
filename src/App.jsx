import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Projects from "./Pages/Projects";
import Features from "./Pages/Features";
import TeamMember from "./Pages/TeamMember";
import Testimonial from "./Pages/Testimonial";
import WebDevelopment from "./Components/Services/WebDevelopment";
import EbayDevelop from "./Components/Services/EbayDevelop";
import WarlmatDevelop from "./Components/Services/WarlmatDevelop";
import TiktokShop from "./Components/Services/TiktokShop";
import ShopifyDevelopment from "./Components/Services/ShopifyDevelopment";
import AmazonDevelopment from "./Components/Services/AmazonDevelopment";
import MobileAppDevelopment from "./Components/Services/MobileAppDevelopment";




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },


        {
          path: "/service",
          element: <Service />,
        },
        {
          path: "/WebDevelopment",
          element: <WebDevelopment/>
        },
        {
          path: "/EbayDevelop",
          element: <EbayDevelop/>
        },
        {
          path: "/WalmartDevelopment",
          element: <WarlmatDevelop/>
        },
        {
          path: "/TiktokShop",
          element: <TiktokShop/>
        },
        {
          path: "/ShopifyDevelopment",
          element: <ShopifyDevelopment/>
        },
        {
          path: "/AmazonDevelopment",
          element: <AmazonDevelopment/>
        },
        {
          path: "/MobileAppDevelopment",
          element: <MobileAppDevelopment/>
        },



        {
          path: "/projects",
          element: <Projects/>
        },

        {
          path: "/features",
          element: <Features/>
        },
        {
          path: "/team-member",
          element: <TeamMember/>
        },
        {
          path: "/testimonial",
          element: <Testimonial/>
        },
        {
          path: "*",
          element: <h1>404 Page Not Found</h1>,
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
