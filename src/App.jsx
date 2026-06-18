import { useState, useEffect, useRef } from 'react';
import './App.css';
import './class.css';

// images import
import proto from './assets/proto3.png';
// import folderLogo from './assets/logo_folder.png';
import wisp from './assets/wisp.png';
import curio from './assets/curio.png';
import intel from './assets/intel.png';
import arsh from './assets/Arsh3.jpeg';

const cards = [
  {
    head: 'Uninfluenced',
    subHead: 'Built for People, Not Algorithms',
    data: 'Software should help you think, create, and focus—not compete for your attention. No dark patterns, engagement traps, or manipulation.'
  },
  {
    head: 'Productive & Fast',
    subHead: 'Less Waiting. More Creating.',
    data: 'Fast software respects your time. Every second saved is a second spent learning, building, or exploring new possibilities.'
  },
  {
    head: 'Offline First',
    subHead: 'Your Work Belongs to You',
    data: 'An internet connection should be a feature, not a requirement. Your tools should remain available wherever your ideas appear.'
  },
  {
    head: 'Highly Secure',
    subHead: 'Privacy by Design',
    data: "Security isn't an afterthought. From local-first workflows to minimal data collection, your information stays under control."
  }
]

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [closeWelcome, setCloseWelcome] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const heroRef = useRef(null);

  function closingWelcome() {
    document.documentElement.requestFullscreen();
    setTimeout(() => {setCloseWelcome(true)}, 1000)
    setTimeout(() => {setShowWelcome(false)}, 2000)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNav(entry.intersectionRatio < 0.5);
      },
      {
        threshold: [0, 0.5, 1],
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
    {showWelcome &&
    <div className="welcome" style={{top: closeWelcome? '-105dvh':'0'}} onClick={() => {closingWelcome()}}>
      <h1>Hello</h1>
      <p>Click anywhere.</p>
    </div>
    }

    <div className="navbar" style={{top: showNav? '5dvh':'-100%'}}>
      {/* <img src={folderLogo} alt="Logo" className="navLogo" href="deepprojects.dev" /> */}
      <div className="navLogo"></div>
      <button className="navBtn"></button>
      <button className="navBtn"></button>
      <button className="navBtn"></button>
      <button className="navBtn"></button>
      <button className="navBtn"></button>
    </div>

    <section className="hero" ref={heroRef}>
      <img src={proto} alt="Hero Image" />
    </section>

    <div className="overview">
      <h2 className='creator pop'>Arshdeep Singh</h2>
      <h3>presents...</h3>

      <h1 className="brand pop">Deep Projects</h1>
      <h2>Wonder. Explore. Create.</h2>
      <h3>A <b className='TS'>Technology Studio</b> driven by <b>Curiosity</b>,<br /><b>Experimentation</b>, and <b>Sheer Stubbornness</b>.</h3>

      <h2 className='spaceup'>Meet Our Team</h2>
      <section className="tCards">
        <div className="tCard" emoji="😎">
          <img src={arsh} alt="arsh" />
          <h1 className="tName pw">Arshdeep</h1>
          <h2>Hooman</h2>
          <h3><b className="pwc">Founder</b>, Dev & PM</h3>
        </div>
        <div className="tCard" emoji="😉">
          <img src={wisp} alt="wisp" />
          <h1 className="tName pw">Wisp</h1>
          <h2>Ghosty</h2>
          <h3>Tinkerer</h3>
        </div>
        <div className="tCard" emoji="😮">
          <img src={curio} alt="curio" />
          <h1 className="tName pw">Curio</h1>
          <h2>Fenrir Cub</h2>
          <h3>Explorer</h3>
        </div>
        <div className="tCard" emoji="🧐">
          <img src={intel} alt="intel" />
          <h1 className="tName pw">Intel</h1>
          <h2>Phoenix Chick</h2>
          <h3>Scholar</h3>
        </div>
      </section>

      {/* <h2>Focusing on what matters...</h2>
      <section className="cards">
        {cards.map((card, index) => {
          return (
            <div className="card" key={index}>
              <h2 className="cardHead pop">{card.head}</h2>
              <h3 className="cardSubHead">{card.subHead}</h3>
              <p className="cardData">{card.data}</p>
            </div>
          )
        })}
      </section> */}
    </div>
    </>
  )
}
