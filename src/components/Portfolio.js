import styles from './Portfolio.module.css';
import PortfolioDetail from './PortfolioDetail';
export default function Portfolio() {

    return (
        <>
            <section className={styles.scrollContainer}>
                <h2>PORTFOLIO</h2>
                <div className={styles.slideBox}>
                    <div className={styles.slideFlow}>
                        <card className={styles.flowItem1}><PortfolioDetail icon={'fa-solid fa-sun'} url={`#`} name={'https://weather-site-tau.vercel.app/'}/></card>
                        <card className={styles.flowItem1}><PortfolioDetail icon={'fa-solid fa-hand-scissors'} url={`https://rock-paper-scissor-rosy-iota.vercel.app/`} name={'Rock Paper Scissors'}/></card>
                        <card className={styles.flowItem1}><PortfolioDetail icon={'fa-solid fa-square-plus'} url={`https://meme-generator-flame-nu.vercel.app/`} name={'Meme generator'}/></card>
                        <card className={styles.flowItem1}><PortfolioDetail icon={'fa-brands fa-google'} url={`https://store-google-api.vercel.app/`} name={'Google api'}/></card>
                        <card className={styles.flowItem1}><PortfolioDetail icon={'fa-solid fa-rocket'} url={`https://nasa-api-sigma-ten.vercel.app/`} name={'Nasa api'}/></card>
                        <card className={styles.flowItem1}><PortfolioDetail icon={'fa-solid fa-list'} url={`https://to-do-list-orpin-gamma.vercel.app/`} name={'ToDo List'}/></card>
                        {/* <card className={styles.flowItem1}><PortfolioDetail icon={'fa-solid fa-palette'} url={`#`} name={'Paint'}/></card> */}
                        
                    </div>
                </div>

            </section>
        </>
    )
}