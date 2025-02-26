import CardSocial from '../components/social/CardSocial3'
import About from '../components/About';
import Resume from '../components/Resume';
import {profile} from '../profile/Profile';
import Hamburger from '../components/ui/Hamburger';
import Typewriter from 'typewriter-effect';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import { Animator, batch, FadeIn, ScrollContainer, ScrollPage, StickyIn, ZoomIn } from 'react-scroll-motion';

const Fadeup = batch(StickyIn(), FadeIn(), ZoomIn())

export default function Home() {
  
  return (
    <>
      {/* <!-- ======= Home Section ======= --> */}
      <section className="hero section" id='home'>
        <Hamburger/>
        <article className="hero-article">
          <h1>{profile.name} {profile.surname}</h1>
          <p>I'm 
            <Typewriter
              options={{
                strings: [`${profile.worker1}`, `${profile.worker2}`, `${profile.worker3}`],
                autoStart: true,
                loop: true,
              }}
              />
          </p>
          <CardSocial />
        </article>
      </section>
      
      {/* <!-- ======= About Section ======= --> */}
      <section id='about' className="section">
        <About profile={profile} />
      </section>
      
      {/* <!-- ======= Resume, skills Section ======= --> */}
      <section id='resume' className="section">
        <Resume/>
        <Skills/>
      </section>
      
      {/* <!-- ======= Portfolio Section ======= --> */}
      <section id='portfolio' className="section">
        <Portfolio />
      </section>

      {/* <!-- ======= thanks Section ======= --> */}
      <section>
      <ScrollContainer>
        <ScrollPage page={1}>
          <Animator animation={Fadeup}>
            <h1>Thanks !</h1>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      </section>
      </>
  )
}