import styles from './About.module.css';
import photo1 from '../image/1.JPG';
import photo2 from '../image/2.JPG';
import photo3 from '../image/3.jpg';
import photo4 from '../image/4.JPG';
import { useEffect, useRef } from 'react';

export default function About({profile}) {
const hiddenElements = useRef([]); // array per gli elementi da osservare

    useEffect(() => {
    // Creiamo l'osservatore
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(styles.show);  // Usa styles.show per evitare conflitti
            } else {
                entry.target.classList.remove(styles.show);
            }
        });
    });

    // Osserviamo ogni elemento nascosto
    hiddenElements.current.forEach((el) => observer.observe(el));

    // Pulizia dell'observer quando il componente si smonta
    return () => {
        hiddenElements.current.forEach((el) => observer.unobserve(el));
    };
    }, []);
    

    return (
        <section className={styles.about}>
            <div className={styles.aboutText}>
                <h2>ABOUT</h2>
                <p>{profile.descr1}
                </p>
            </div>
            <h3>Personal information</h3>
            <div className={styles.aboutInfo}>
                <div className={`${styles.hidden} ${styles.aboutInfoImg}`} ref={(el) => (hiddenElements.current[0] = el)}>
                    <img src={photo2} alt='worker'/>
                </div>
                <div className={`${styles.hidden} ${styles.aboutInfoDetails}`} ref={(el) => (hiddenElements.current[1] = el)}>
                    <p>{profile.descr2}</p>
                    <div className={styles.listDetail}>
                        <ul>
                            <li><i class='bx bx-chevron-right'></i><b>Birthday:</b> {profile.hb}</li>
                            <li><i class='bx bx-chevron-right'></i><b>Age:</b> {profile.age}</li>
                            <li><i class='bx bx-chevron-right'></i><b>E-Mail:</b> {profile.mail}</li>
                            <li><i class='bx bx-chevron-right'></i><b>City:</b> {profile.city}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}