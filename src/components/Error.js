import { useRouteError } from "react-router-dom";
import {NavLink} from 'react-router-dom';

export default function Error() {
  const error = useRouteError();
  
  return (
    <>
      <h1>ERROR!</h1>
      <p>{error.message}</p>
      <NavLink to="/">
          Go to home
      </NavLink>
    </>
  )
}