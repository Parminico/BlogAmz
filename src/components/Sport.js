import styles from './House.module.css';
import {sport} from '../Product/Sport';
import { useState } from 'react';
import Modale from './ui/Modale';


export default function Sport () {

    const [isactive, setisactive] = useState(null)

    const product = sport.map(card => (
        <div key={card.id} className={styles.cardProduct}
                onClick={() => setisactive(card)}>
            <h5>{card.title}</h5>
        </div>
    ))

    return (
        <>
            <div className={styles.container}>
                <section className={styles.category}>
                    <h1>Sport</h1>
                    <p>In this section you will find a series of articles related to the "Sport" category... have fun!</p>  
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