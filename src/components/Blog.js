import styles from './Blog.module.css';
import {NavLink} from 'react-router-dom';


export default function Blog() {
    

    return (
        <>
            <section className={styles.blogSection}>
                <h1>The True Blog</h1>
                <h2>Welcome to my Blog!!</h2>
                <p>In this blog I talk about amazon products that I can give valuable information that you will not find on other sites. This is because before writing the reviews, the products have been personally tested. I hope you can find something interesting!</p>
                <p>As an Amazon Associate, I earn from qualifying purchases.</p>        
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
                    Technology
                </NavLink>
                <NavLink 
                    to="/office" end
                >
                    Office
                </NavLink>
                <NavLink 
                    to="/house" end
                >
                    House
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