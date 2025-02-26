import styles from './Portfolio.module.css';
import PortfolioDetail from './PortfolioDetail';
export default function Portfolio() {

    return (
        <>
            <section className={styles.scrollContainer}>
                <h2>PORTFOLIO</h2>
                <div className={styles.slideBox}>
                    <div className={styles.slideFlow}>
                        <article className={styles.flowItem1}><PortfolioDetail icon={'fa-solid fa-sun'} url={`https://weather-site-tau.vercel.app/`} name={'Weather app'}/></article>
                        <article className={styles.flowItem1}><PortfolioDetail icon={'fa-solid fa-hand-scissors'} url={`https://rock-paper-scissor-rosy-iota.vercel.app/`} name={'Rock Paper Scissors'}/></article>
                        <article className={styles.flowItem1}><PortfolioDetail icon={'fa-solid fa-square-plus'} url={`https://meme-generator-flame-nu.vercel.app/`} name={'Meme generator'}/></article>
                        <article className={styles.flowItem1}><PortfolioDetail icon={'fa-brands fa-google'} url={`https://store-google-api.vercel.app/`} name={'Google api'}/></article>
                        <article className={styles.flowItem1}><PortfolioDetail icon={'fa-solid fa-rocket'} url={`https://nasa-api-sigma-ten.vercel.app/`} name={'Nasa api'}/></article>
                        <article className={styles.flowItem1}><PortfolioDetail icon={'fa-solid fa-list'} url={`https://to-do-list-orpin-gamma.vercel.app/`} name={'ToDo List'}/></article>
                        {/* <article className={styles.flowItem1}><PortfolioDetail icon={'fa-solid fa-palette'} url={`#`} name={'Paint'}/></article> */}
                        
                    </div>
                </div>

            </section>
        </>
    )
}