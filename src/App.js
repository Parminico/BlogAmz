import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './routes/Home';
import NotFound from "./routes/NotFound";
import Technology from './components/Technology';
import Office from './components/Office';
import House from './components/House';
import Sport from './components/Sport';

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
        {path:"technology", element: <Technology/>},
        {path:"office", element: <Office/>},
        {path:"house", element: <House/>},
        {path:"sport", element: <Sport/>},
      ]
    }
  ])
  
  return (
    <RouterProvider router={router}/>
  )
}