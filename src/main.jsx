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
import Dashboard from './Components/Dashboard/Dashboard';
import Item from './Components/Dashboard/Item/Item';
import AddItem from './Components/Dashboard/AddItem';
import AuthProvider from './Components/Provider/AuthProvider';
import User from './Components/Dashboard/User/User';
import View from './Components/Collection/View';
import Order from './Components/Dashboard/Order/Order';

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
        element: <View></View>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard/item',
        element: <Item></Item>,
      },
      {
        path: '/dashboard/user',
        element: <User></User>
      },
      {
        path: '/dashboard/item',
        element: <Item></Item>,
      },
      {
        path: '/dashboard/additem',
        element: <AddItem></AddItem>
      },
      {
        path: '/dashboard/my-order',
        element: <Order></Order>
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        {/* <QueryClientProvider client={queryClient}> */}
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    {/* </QueryClientProvider> */}
  </StrictMode>,
)
