import Hamburger from '../components/ui/Hamburger';
import Blog from '../components/Blog';

export default function Home() {
  
  return (
    <>
      {/* <!-- ======= Home Section ======= --> */}
      <section className="home" id='home'>
        <Hamburger/>
        <article className="home-article">
          <Blog/>
        </article>
      </section>
      </>
  )
}