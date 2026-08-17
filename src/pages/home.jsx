import { Link } from "react-router";


const cards = [
  [
    "UNINFLUENCED",
    "Built for People, Not Algorithms",
    "Software should help you think, create, and focus—not compete for your attention. No dark patterns, engagement traps, or manipulation."
  ],
  [
    "PRODUCTIVE & FAST",
    "Less Waiting. More Creating.",
    "Fast software respects your time. Every second saved is a second spent learning, building, or exploring new possibilities."
  ],
  [
    "OFFLINE FIRST",
    "Your Work Belongs to You",
    "An internet connection should be a feature, not a requirement. Your tools should remain available wherever your ideas appear."
  ],
  [
    "SOURCE AVAILABLE",
    "Transparency Over Blind Trust",
    "Our code is mostly available under the Deep Projects Source Available License. Where appropriate, projects may also be released as open source."
  ]
];

export default function Home() {
  return (
    <>
      <div id="matrix" />
    
      <section id="hero">
        <h1>Deep Projects</h1>
        <p id="founder">By Arshdeep</p>
        <h4>Wonder. Explore. Create.</h4>
      </section>

      <section id="identity">
        <h2>Deep Projects is a Technology Studio</h2>
        <div className="drivers">
          <h4>...driven by</h4>
          <div className="words">
            <h4 className="word">Curiosity</h4>
            <h4 className="word">Experimentation</h4>
            <h4 className="word">Sheer Stubbornness</h4>
          </div>
        </div>

        <div className="cards">
          {cards.map(([title, front, back]) => (
            <div className="flip-card" key={title}>
              <div className="flip-inner">
                <div className="flip front">
                  <p className="title">{title}</p>
                  <p>{front}</p>
                </div>

                <div className="flip back">
                  <p>{back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <h2>Deep Projects</h2>
            <p>
              Software for people who create, learn, and explore.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h3>Explore</h3>
              <Link to="/projects">Projects</Link>
              <a href="/philosophy">Philosophy</a>
              <Link to="/about">About</Link>
            </div>

            <div>
              <h3>Development</h3>
              <a href="https://github.com/Deep-Projects-Dev/">GitHub</a>
              <a href="/source">Source Available</a>
              <a href="/license">DPSAL</a>
            </div>

            <div>
              <h3>Connect</h3>
              <Link to="/contact">Contact</Link>
              <a href="/discord">Discord</a>
              <a href="/updates">Updates</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2024 Deep Projects</span>
          <span>Built to create, not to manipulate.</span>
        </div>
      </section>
    </>
  )
}