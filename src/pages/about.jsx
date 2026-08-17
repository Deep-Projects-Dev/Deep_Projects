import "./about.css";

const philosophies = [
  [
    "UNINFLUENCED",
    "Built for People, Not Algorithms",
    "Software should help you think, create, and focus—not compete for your attention."
  ],
  [
    "PRODUCTIVE & FAST",
    "Less Waiting. More Creating.",
    "Fast software respects your time. Every second saved is a second spent learning, building, or exploring."
  ],
  [
    "OFFLINE FIRST",
    "Your Work Belongs to You",
    "An internet connection should be a feature, not a requirement."
  ],
  [
    "HIGHLY SECURE",
    "Privacy by Design",
    "Security isn't an afterthought. Your information should remain under your control."
  ]
];

const mascots = [
  {
    name: "Wisp",
    type: "Ghost",
    role: "The Main Mascot",
    description:
      "Wisp is the face of Deep Projects and its primary mascot. Curious, friendly, and always around when something new is being created.",
    image: "src/assets/wisp.png"
  },
  {
    name: "Curio",
    type: "Fenrir Cub",
    role: "The Curious One",
    description:
      "Curio represents curiosity—the instinct to question, explore, experiment, and discover what lies beyond the obvious.",
    image: "src/assets/curio.png"
  },
  {
    name: "Intel",
    type: "Pheonix Chick",
    role: "The Wise One",
    description:
      "Intel represents wisdom—the ability to learn from experience, understand deeply, and use knowledge with purpose.",
    image: "src/assets/intel.png"
  }
];

export default function About() {
  return (
    <main className="about">

      {/* HERO */}
      <section className="about-hero">
        <span className="eyebrow">DEEP PROJECTS · EST. 2024</span>

        <h1>
          We build things
          <br />
          worth exploring.
        </h1>

        <p>
          Deep Projects is an independent technology studio building
          software for people who create, learn, explore, and think.
        </p>
      </section>


      {/* FOUNDER */}
      <section className="founder">
        <div className="founder-image">
          <img
            src="src/assets/founder.jpeg"
            alt="Arshdeep Singh"
          />
        </div>

        <div className="founder-content">
          <span className="eyebrow">THE FOUNDER</span>

          <h2>Hi, I'm Arshdeep.</h2>

          <p className="lead">
            I'm the person behind Deep Projects.
          </p>

          <p>
            Deep Projects grew out of a simple idea: technology should give
            people more control over their time, ideas, and work—not less.
          </p>

          <p>
            I build software, experiment with ideas, learn across disciplines,
            and occasionally become far too stubborn about making something
            work exactly the way I imagined it.
          </p>

          <div className="founder-tags">
            <span>Developer</span>
            <span>Designer</span>
            <span>Student</span>
            <span>Experimenter</span>
          </div>
        </div>
      </section>


      {/* WHY */}
      <section className="about-section why">
        <span className="eyebrow">WHY DEEP PROJECTS?</span>

        <h2>Technology should serve people.</h2>

        <p className="section-lead">
          A lot of modern software is designed around engagement, growth,
          monetization, and data collection. Deep Projects takes a different
          approach.
        </p>

        <p>
          We believe software should respect the person using it. It should
          help you accomplish something, get out of your way, and leave your
          attention, data, and time under your control.
        </p>
      </section>


      {/* PHILOSOPHY */}
      <section className="about-section philosophy">
        <div className="section-heading">
          <div>
            <span className="eyebrow">WHAT WE BELIEVE</span>
            <h2>Four principles.</h2>
          </div>

          <p>
            These principles guide how Deep Projects thinks about software.
          </p>
        </div>

        <div className="philosophy-grid">
          {philosophies.map(([title, subtitle, text]) => (
            <article className="philosophy-card" key={title}>
              <span className="card-number">
                {String(philosophies.indexOf(
                  philosophies.find(item => item[0] === title)
                ) + 1).padStart(2, "0")}
              </span>

              <h3>{title}</h3>
              <h4>{subtitle}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>


      {/* WHAT WE BUILD */}
      <section className="about-section build">
        <span className="eyebrow">WHAT WE BUILD</span>

        <h2>Projects, tools, experiments, ideas.</h2>

        <p className="section-lead">
          Deep Projects isn't a single product. It's a place to build things
          that are useful, interesting, or simply worth exploring.
        </p>

        <div className="build-grid">
          <article>
            <span>01</span>
            <h3>Productivity</h3>
            <p>
              Tools designed to help people focus, organize, and create.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Education</h3>
            <p>
              Software that makes learning and exploring knowledge easier.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Developer Tools</h3>
            <p>
              Tools and experiments for people who build software.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Experiments</h3>
            <p>
              Strange ideas, prototypes, and things that exist because they
              seemed worth trying.
            </p>
          </article>
        </div>
      </section>


      {/* MASCOTS */}
      <section className="about-section mascots">
        <div className="section-heading">
          <div>
            <span className="eyebrow">THE MASCOTS</span>
            <h2>Meet the trio.</h2>
          </div>

          <p>
            Three little creatures. Three ideas at the heart of Deep Projects.
          </p>
        </div>

        <div className="mascot-grid">
          {mascots.map(mascot => (
            <article className="mascot-card" key={mascot.name}>
              <div className="mascot-image">
                <img
                  src={mascot.image}
                  alt={`${mascot.name} mascot`}
                />
              </div>

              <div className="mascot-info">
                <span>{mascot.role}</span>

                <h3>{mascot.name}</h3>
                <h4>{mascot.type}</h4>

                <p>{mascot.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* LICENSING */}
      <section className="about-section licensing">
        <div className="license-panel">
          <div>
            <span className="eyebrow">HOW WE BUILD</span>

            <h2>Source Available by default.</h2>

            <p>
              Most Deep Projects software is Source Available under the
              Deep Projects Source-Available License. Source availability
              gives people the ability to inspect and learn from our work
              while preserving the distribution controls defined by the
              license.
            </p>

            <p>
              When appropriate, individual projects may instead be released
              under an open-source license.
            </p>
          </div>

          <a href="/license">
            Read DPSAL
            <span>↗</span>
          </a>
        </div>
      </section>


      {/* INDEPENDENCE */}
      <section className="about-section independence">
        <span className="eyebrow">INDEPENDENCE</span>

        <h2>Built independently.</h2>

        <p className="section-lead">
          Deep Projects exists to build software on its own terms.
        </p>

        <p>
          No engagement traps. No advertising-driven design. No unnecessary
          dependence on the cloud. No obligation to turn every idea into a
          business.
        </p>

        <p>
          The goal is simple: make good software and keep the freedom to
          decide what "good" means.
        </p>
      </section>


      {/* TIMELINE */}
      <section className="about-section timeline">
        <span className="eyebrow">THE JOURNEY</span>

        <h2>Still becoming.</h2>

        <div className="timeline-list">
          <div>
            <span>2024</span>
            <p>Deep Projects begins.</p>
          </div>

          <div>
            <span>2025</span>
            <p>Projects, experiments, and ideas continue to evolve.</p>
          </div>

          <div>
            <span>2026</span>
            <p>
              Deep Projects takes shape around its current philosophy,
              identity, website, and DPSAL.
            </p>
          </div>

          <div className="future">
            <span>∞</span>
            <p>More things to explore.</p>
          </div>
        </div>
      </section>


      {/* CLOSING */}
      <section className="about-closing">
        <div className="wisp-closing">
          <img src="src/assets/wisp.png" alt="Wisp" />
        </div>

        <span className="eyebrow">DEEP PROJECTS</span>

        <h2>Wonder. Explore. Create.</h2>

        <p>
          We're still figuring things out.
          <br />
          That's part of the point.
        </p>
      </section>

    </main>
  );
}