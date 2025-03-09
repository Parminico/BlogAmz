import Header from './Header';
import {Outlet} from 'react-router-dom';
import Hamburger from './ui/Hamburger';


// Con questo componente inserisco un header che viene visualizzato in tutte le routes
export default function LayoutRoute() {



  return (
    <>
      <Header/>
      <Hamburger/>
      <Outlet/>
    </>
  )
}