import Card from "./ui/Card"
import styles from './Skills.module.css';

export default function Skills() {
    return (
        <section className={styles.skillsContainer}>
            <h3>Skills</h3>
            <div style={{width: '85%', margin: '0 auto'}}>
                <Card/>
            </div>        
        </section>
    )
}