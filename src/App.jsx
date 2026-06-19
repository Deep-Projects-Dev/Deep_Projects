// global imports
import { useState, useEffect, useRef } from 'react';
import './App.css';
import './class.css';

// images import
import proto from './assets/proto3.png';
import wisp from './assets/wisp.png';
import curio from './assets/curio.png';
import intel from './assets/intel.png';
import arsh from './assets/Arsh3.jpeg';

// global datasets
const cards = [
  {
    head: 'Uninfluenced',
    subHead: 'Built for People, Not Algorithms',
    data: 'Not owned by capitalists. Software should help you think, create, and focus—not compete for your attention. No dark patterns, engagement traps, or manipulation.'
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
]; const threeList = [
  "W_", "Wo_", "Won_", "Wonr_", "Won_", "Wond", "Wonde_", "Wonder_", "Wonder._", "Wonder. _",
  "Wonder. E_", "Wonder. Ex_", "Wonder. Exp_", "Wonder. Expl_", "Wonder. Explo_", "Wonder. Explod_", "Wonder. Explode_",
  "Wonder. Explod_", "Wonder. Explo_", "Wonder. Explor_", "Wonder. Explore._", "Wonder. Explore. _",
  "Wonder. Explore. C_", "Wonder. Explore. Cr_", "Wonder. Explore. Cre_", "Wonder. Explore. Crea_", "Wonder. Explore. Creat_",
  "Wonder. Explore. Create._", "Wonder. Explore. Create."
]

// app function
export default function App() {
  // useState
  const [showWelcome, setShowWelcome] = useState(true);
  const [closeWelcome, setCloseWelcome] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [three, setThree] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState('');

  // useRef
  const heroRef = useRef(null);
  const threeRef = useRef(null);

  // functions
  function closingWelcome() {
    document.documentElement.requestFullscreen();
    setTimeout(() => {setCloseWelcome(true)}, 1000)
    setTimeout(() => {setShowWelcome(false)}, 2000)
  }
  function threeAnim() {
    setTimeout(() => {
      for (let i = 0; i < threeList.length; i++) {
        setTimeout(() => {
          setThree(threeList[i])
        }, 200 * i);
      }
    }, 1000)
  }

  // useEffects
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNav(entry.intersectionRatio < 0.75);
      },
      { threshold: [0, 0.75, 1] }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.2) {
          observer2.unobserve(entry.target);
          threeAnim();
        }
      },
      { threshold: [0, 0.2, 1] }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (threeRef.current) observer2.observe(threeRef.current);

    return () => {
      observer.disconnect();
      observer2.disconnect();
    };
  }, []);

  // markUp file
  return (
    <>
    {showWelcome &&
    <div className="welcome" style={{top: closeWelcome? '-105dvh':'0'}} onClick={() => {closingWelcome()}}>
      <h1>Hello</h1>
      <p>Click anywhere.</p>
    </div>
    }

    <div className="navbar" style={{top: showNav? '5dvh':'-100%'}}>
      <a className="navLogo" href="https://deepprojects.dev"></a>
      <button className="navBtn">Blog</button>
      <button className="navBtn">Portfolio</button>
      <button className="navBtn">Services</button>
      <div className="navBtn" id="navBtnC">
        <button className="navBtn" style={{backgroundColor: (showModal && mode==="About")? 'rgba(50, 50, 50, 0.5)':'rgba(0, 0, 0, 0.5)'}} onClick={() => {setShowModal(true); setMode('About')}}>About</button>
        <button className="navBtn" style={{backgroundColor: (showModal && mode==="Contact")? 'rgba(50, 50, 50, 0.5)':'rgba(0, 0, 0, 0.5)'}} onClick={() => {setShowModal(true); setMode('Contact')}}>Contact</button>
      </div>
    </div>

    <section className="hero" ref={heroRef}>
      <img src={proto} alt="Hero Image" />
    </section>

    <div className="overview">
      <h2 className='creator pop'>Arshdeep Singh</h2>
      <h3>presents...</h3>

      <h1 className="brand pop">Deep Projects</h1>
      <h2 className="three" ref={threeRef}>{three}</h2>
      <h3>A <b>Technology Studio</b> driven by Curiosity,<br />Experimentation, and Sheer Stubbornness.</h3>

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

      <h2 className='spaceup'>Focusing on What Matters</h2>
      <section className="tCards">
        {cards.map((card, index) => {
          return (
            <div className="tCard" key={index}>
              <h2 className="cardHead pop">{card.head}</h2>
              <h3 className="cardSubHead">{card.subHead}</h3>
              <p className="cardData">{card.data}</p>
            </div>
          )
        })}
      </section>
    </div>

    {showModal && <div className="modal">
      <h2>{mode} <button className="clsModal" onClick={() => {setShowModal(false)}}>⨉</button></h2>
      {mode=='About' && <div>
        <h1></h1>
        <h2>Deep Projects is an independent technology and innovation organization founded by Arshdeep Singh.</h2>
        <h2>We build software, digital products, educational tools, and creative projects that help people learn, create, and solve real-world problems. Our work combines technology, design, and curiosity to turn ideas into practical solutions.</h2>
        <h2> mission is to make powerful technology more accessible, useful, and meaningful for students, creators, and communities.</h2>
        <h3>Powered by Curiosity.</h3>
        <p style={{color: 'red'}}>We will upload Blogs, Portfolio, and Serivces within next week.</p>
      </div>}
      {mode=='Contact' && <div>
        <h2>Get in Touch</h2>
        <h3>Have a question, suggestion, collaboration idea, or feedback?</h3>
        <h3>Email: beingarshdeepsingh@gmail.com</h3>
        <h3>Website: https://deepprojects.dev</h3>
        <h3>GitHub: https://github.com/Deep-Projects-Dev</h3>
        <h3>We typically respond within a few business days.</h3>
      </div>}
    </div>}
    </>
  )
}
