import { useState, useEffect, useRef } from 'react';
import './App.css';
import './class.css';

// images import
import proto from './assets/proto3.png';
import folderLogo from './assets/logo_folder.png';

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
      <h1>hello</h1>
    </div>
    }

    <div className="navbar" style={{top: showNav? '5dvh':'-100%'}}>
      <img src={folderLogo} alt="Logo" className="navLogo" href="deepprojects.dev" />
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
      <h2>Focusing on what matters...</h2>
      
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
      </section>
    </div>
    </>
  )
}
