import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './routes/Home';
import NotFound from "./routes/NotFound";
import Technology from './components/Technology';
// import Office from './components/Office';
import Work from './components/Work';
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
        // {path:"office", element: <Office/>},
        {path:"work", element: <Work/>},
        {path:"sport", element: <Sport/>},
      ]
    }
  ])
  
  return (
    <RouterProvider router={router}/>
  )
}