import styles from './Blog.module.css';
import {NavLink} from 'react-router-dom';


export default function Blog() {
    

    return (
        <>
            <section className={styles.blogSection}>
                <h1>The True Blog</h1>
                <h2>Benvenuto nel Mio Angolo di Recensioni!!</h2>
                <p>Ciao e benvenuto nel mio blog! Qui non troverai semplici elenchi di prodotti, ma esperienze reali. Ogni recensione nasce da un desiderio: aiutarti a trovare ciò che davvero meriti.</p>   
                <h3>Perché Dovresti Fidarti di Me?</h3>
                <p>Perché ogni prodotto che recensisco lo valuto con occhi sinceri. Non mi limito a descrivere caratteristiche tecniche: ti parlo di cosa significa usare davvero quegli oggetti, come migliorano la vita di tutti i giorni e, sì, anche cosa non va bene.</p>
                <h3>Scopri Prodotti Amazon Testati Direttamente da Me!</h3>
                <p>Immagina di non dover più perdere ore a cercare recensioni affidabili. Qui faccio il lavoro sporco per te! Se un prodotto mi convince, te lo racconto come farei con un amico. Se qualcosa non va, te lo dico senza filtri.</p>
                <h3>Lasciati Ispirare e Scegli il Meglio per Te</h3>
                <p>Il mio obiettivo è uno solo: darti la sicurezza di fare la scelta giusta. E, magari, farti scoprire qualcosa di sorprendente lungo il percorso.</p>
                <br/>
                <br/>
                <p>In qualità di affiliato Amazon, ricevo un guadagno dagli acquisti idonei.</p>
            </section>
            <section className={styles.blogSelect}>
                <NavLink 
                    to="/"
                >
                    Blog
                </NavLink>   
                <NavLink 
                    to="/technology" end
                >
                    Tecnologia
                </NavLink>
                {/* <NavLink 
                    to="/office" end
                >
                    Ufficio
                </NavLink> */}
                <NavLink 
                    to="/work" end
                >
                    Lavoro
                </NavLink>
                <NavLink 
                    to="/sport" end
                >
                    Sport
                </NavLink>
            </section>
        </>
        
    )
}