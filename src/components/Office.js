import styles from './Work.module.css';
import {office} from '../Product/Office';
import { useState } from 'react';
import Modale from './ui/Modale';


export default function Office () {

    const [isactive, setisactive] = useState(null)

    const product = office.map(card => (
        <div key={card.id} className={styles.cardProduct}
                onClick={() => setisactive(card)}>
            <h5>{card.title}</h5>
        </div>
    ))

    return (
        <>
            <div className={styles.container}>
                <section className={styles.category}>
                    <h1>altro</h1>
                    <p>In questa sezione troverai tutti i prodotti relativi alla categoria del mondo della cartoleria, divertiti a scoprirli tutti!</p>  
                </section>

                <div className={styles.div}>
                    <i className="fa-solid fa-arrow-right"></i>
                    <section className={styles.productContainer}>
                        {product}
                    </section>
                    <i className="fa-solid fa-arrow-left"></i>
                </div>

                {isactive && (
                    <Modale isactive={isactive} setisactive={setisactive}/>
                )}
            </div>
        </>
    )
}