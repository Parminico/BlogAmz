import styles from './Resume.module.css';
import { useEffect, useRef } from 'react';


export default function Resume () {

    const hiddenElements = useRef([]); // array per gli elementi da osservare

    useEffect(() => {
    // Creiamo l'osservatore
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(styles.show);
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
        <>
            <section className={styles.resume}>
                <h2>RESUME</h2>
                <article className={styles.resumeContainer}>
                    <div className={`${styles.hidden} ${styles.resumeEducation}`} ref={(el) => (hiddenElements.current[0] = el)}>
                        <h4><i class='bx bx-radio-circle-marked'></i>Education</h4>
                        <p><i class='bx bx-radio-circle'></i>In 2017 I received qualified agricultural technician.</p>
                        <p><i class='bx bx-radio-circle'></i>I studied an online course to learn Microsoft Word, basic and advanced Excel.</p>
                        <p><i class='bx bx-radio-circle'></i>In 2025 I am passionate about web development and studying online to acquire front-end skills.</p>
                        <p><i class='bx bx-radio-circle'></i>With other online studies I learn Excel VBA to have new Excel knowledge.</p>
                    </div>
                    <div className={`${styles.hidden} ${styles.resumeExperience}`} ref={(el) => (hiddenElements.current[1] = el)}>
                        <h4><i class='bx bx-radio-circle-marked'></i>Professional Experience</h4>
                        <p><b>2018 - Present</b></p>
                        <p><i class='bx bx-radio-circle'></i>Became logistics manager, support technicians and management of analysis with external laboratories.</p>
                    </div>
                </article>
            </section>
        </>
    )
}

//  className={activeSection === 'resume' ? styles.anima : ''}