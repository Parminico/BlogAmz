import styles from './Hamburger.module.css';
import { useState } from 'react';
import Button from './NavbarButton';

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
                    <div className={styles.show}>
                        <a href="#home" onClick={viewNavbar}>
                            {/* <Button text='Home' icon='bx bx-home-alt'></Button> */}
                            <button className={styles.button}>
                                <i className='bx bx-home-alt Icon'/>
                                <span>Home</span>
                            </button>
                        </a>
                        <a href="#about" onClick={viewNavbar}>
                            {/* <Button text='About' icon='bx bxs-user'></Button> */}
                            <button className={styles.button}>
                                <i className='bx bxs-user Icon'/>
                                <span>About</span>
                            </button>
                        </a>
                        <a href="#resume" onClick={viewNavbar}>
                            {/* <Button text='Resume' icon='bx bx-file-blank'></Button> */}
                            <button className={styles.button}>
                                <i className='bx bx-file-blank Icon'/>
                                <span>Resume</span>
                            </button>
                        </a>
                        <a href="#portfolio" onClick={viewNavbar}>
                            {/* <Button text='Portfolio' icon='bx bx-briefcase'></Button> */}
                            <button className={styles.button}>
                                <i className='bx bx-briefcase Icon'/>
                                <span>Portfolio</span>
                            </button>
                        </a>
                        {/* <a href="#contact" onClick={viewNavbar}>
                            <button className={styles.button}>
                                <i className='bx bxs-contact Icon'/>
                                <span>Contact</span>
                            </button>
                        </a> */}
                    </div>
                </>
            )}
        </>
    )
}