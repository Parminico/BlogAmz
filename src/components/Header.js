import Button from './ui/NavbarButton';
import React, { useState, useEffect } from 'react';

export default function Header() {

  // FUNZIONE PER CONTROLLARE LO SCROLL ACTIVE
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('.section');  // Seleziona tutte le sezioni della pagina

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);  // Imposta la sezione attiva
          }
        });
      },
      { threshold: 0.5 }  // La sezione è considerata visibile quando almeno il 50% è visibile
    );

    sections.forEach((section) => {
      observer.observe(section);  // Inizia a monitorare ogni sezione
    });

    // Cleanup dell'observer quando il componente viene smontato
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);


  return (
    <header>
      <nav className='navbar'>
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
            <Button text='Home' icon='bx bx-home-alt'></Button>
          </a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
            <Button text='About' icon='bx bxs-user'></Button>
          </a>
          <a href="#resume" className={activeSection === 'resume' ? 'active' : ''}>
            <Button text='Resume' icon='bx bx-file-blank'></Button>
          </a>
          <a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''}>
            <Button text='Portfolio' icon='bx bx-briefcase'></Button>
          </a>
          {/* <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
            <Button text='Contact' icon='bx bxs-contact'></Button>
          </a> */}
      </nav>
    </header>
  )
}
