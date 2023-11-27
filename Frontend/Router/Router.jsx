import { createBrowserRouter } from 'react-router-dom';
import Layout from "../src/views/Layout/Layout.jsx";
import Dashboard from "../src/views/Dashboard/Dashboard.jsx";
import Home from "../src/views/Home/Home.jsx";

const router = createBrowserRouter(
   [
      {
         path:"/",
         element:<Layout />,
         children:[
            {
               path:"/home",
               element:<Home />
            },
            {
               path:"/dashboard",
               element:<Dashboard />
            },
         ]
      }
   ]
)

export default router