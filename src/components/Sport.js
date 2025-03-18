import styles from './Work.module.css';
import { useState } from 'react';
import Modale from './ui/Modale';
import {sport} from '../Product/Sport';
import { motion } from 'framer-motion';

export default function Sport () {

    const [isactive, setisactive] = useState(null)

    const product = sport.map((card, index) => (
        <motion.div
            key={card.id}
            className={styles.cardProduct}
            onClick={() => setisactive(card)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            >
                <h5>{card.title}</h5>
        </motion.div>
    ))

    return (
        <>
            <div className={styles.container}>
                <section className={styles.category}>
                    <h1>Sport</h1>
                    <p>In questa sezione troverai tutti i prodotti relativi alla categoria del mondo dello sport, divertiti a scoprirli tutti!</p>  
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