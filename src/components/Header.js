import {NavLink} from 'react-router-dom';

export default function Header() {



  return (
    <header>
      <nav className='navbar'>
        <div className='divNavbar'>
        <NavLink 
            to="/"
            style={({isActive}) => isActive ? {fontWeight: 'bold', backgroundColor: 'lightgreen', textDecoration: 'none', color: 'black', padding:'5px', border: '1px solid black', borderRadius: '5px'} : undefined}
          >
            Blog
          </NavLink>   
          <NavLink 
            to="/technology"
            style={({isActive}) => isActive ? {fontWeight: 'bold', backgroundColor: 'lightgreen', textDecoration: 'none', color: 'black', padding:'5px', border: '1px solid black', borderRadius: '5px'} : undefined}
            end
          >
            Tecnologia
          </NavLink>
          {/* <NavLink 
            to="/office"
            style={({isActive}) => isActive ? {fontWeight: 'bold', backgroundColor: 'lightgreen', textDecoration: 'none', color: 'black', padding:'5px', border: '1px solid black', borderRadius: '5px'} : undefined}
            end
          >
            Ufficio
          </NavLink> */}
          <NavLink 
            to="/work"
            style={({isActive}) => isActive ? {fontWeight: 'bold', backgroundColor: 'lightgreen', textDecoration: 'none', color: 'black', padding:'5px', border: '1px solid black', borderRadius: '5px'} : undefined}
            end
          >
            Lavoro
          </NavLink>
          <NavLink 
            to="/sport"
            style={({isActive}) => isActive ? {fontWeight: 'bold', backgroundColor: 'lightgreen', textDecoration: 'none', color: 'black', padding:'5px', border: '1px solid black', borderRadius: '5px'} : undefined}
            end
          >
            Sport
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
