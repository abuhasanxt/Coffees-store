import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layout/MainLayout.jsx';
import Home from './copmonents/Home/HOme.jsx';
import AddCoffee from './copmonents/AddCoffee/AddCoffee.jsx';
import UpdatedCoffee from './copmonents/UpdatedCoffee/UpdatedCoffee.jsx';
import CoffeeDetails from './copmonents/coffeeDetails/CoffeeDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
        loader:()=>fetch('http://localhost:3000/coffees'),
        Component:Home
      },
      {path:'addCoffee',
        Component:AddCoffee
      },
      {
        path:'updatedCoffee/:id',
        loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
        Component:UpdatedCoffee
      },
      {
        path:'coffee/:id',
        loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
        Component:CoffeeDetails
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
