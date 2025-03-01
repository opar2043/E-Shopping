import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import {

//   QueryClient,
//   QueryClientProvider,
// } from 'react-query'

// const queryClient = new QueryClient()

import Root from './Components/Root/Root';
import Error from './Components/Root/Error';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Collection from './Components/Collection/Collection';
import Contact from './Components/Contact/Contact';
import Login from './Components/Firebase/Login';
import Register from './Components/Firebase/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/collection",
        element: <Collection></Collection>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/view/:id",
        
        element: <Contact></Contact>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        {/* <QueryClientProvider client={queryClient}> */}
        <RouterProvider router={router} />
    {/* </QueryClientProvider> */}
  </StrictMode>,
)
