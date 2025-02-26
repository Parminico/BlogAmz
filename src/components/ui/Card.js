import { skill } from "../../profile/Profile";
import styles from './Card.module.css';


export default function Card() {

    let cardMap = skill.map(element => (
            <article className={styles.cardBox} key={element.title}>
                <div className={styles.cardIcon}>
                    <i className={element.icon} style={{color: element.color}}></i>
                </div>
                <div className={styles.cardText}>
                    <p><strong>{element.title}</strong></p>
                    <p>{element.category}</p>
                </div>
            </article>
    ))
    return (
        <>
            <section className={styles.cardContainer}>
                {cardMap}
            </section>
        </>
    )
}