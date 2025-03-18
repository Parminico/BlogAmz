import styles from './Hamburger.module.css';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';

export default function Hamburger() {

    const [showNavbar, setShowNavbar] = useState(false);
    function viewNavbar() {
        setShowNavbar(!showNavbar);
    }
    
    return (
        <>
            <button className={styles.hamburger} type='button' id='hamburger' onClick={viewNavbar}>
                    <i className={`${styles.size} ${showNavbar ? "fa-solid fa-x" : 'fa-solid fa-bars'} ${showNavbar ? styles.isActive : ''}`}></i>
            </button>
            {showNavbar && (
                <>
                    <div className={styles.show} onClick={viewNavbar}>
                        <NavLink 
                        to="/"
                        >
                        Blog
                        </NavLink>   
                        <NavLink 
                        to="/technology"
                        end
                        >
                        Tecnologia
                        </NavLink>
                        {/* <NavLink 
                        to="/office"
                        end
                        >
                        Office
                        </NavLink> */}
                        <NavLink 
                        to="/work"
                        end
                        >
                        Lavoro
                        </NavLink>
                        <NavLink 
                        to="/sport"
                        end
                        >
                        Sport
                        </NavLink>
                    </div>
                </>
            )}
        </>
    )
}