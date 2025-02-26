// Se navigo su una route non esistente, finisco in questo componente
import {NavLink} from 'react-router-dom';


export default function NotFound() {
  return (
    <>
      <h1>Page not found!</h1>
      <NavLink to="/">
        go to home
      </NavLink>
    </>
  )
}