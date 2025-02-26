import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './routes/Home'
import NotFound from "./routes/NotFound"
import './';

import LayoutRoute from "./components/LayoutRoute";
import Error from "./components/Error";

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LayoutRoute/>,
      errorElement: <Error/>,
      children: [
        {index: true, element: <Home/>},
        {path:"*", element:<NotFound/>},
      ]
    }
  ])
  
  return (
    <RouterProvider router={router}/>
  )
}