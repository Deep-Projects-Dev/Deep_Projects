import { useEffect, useState } from "react";
import "./license.css";

const sections = [
  ["definitions", "1. Definitions"],
  ["rights", "2. Grant of Rights"],
  ["restrictions", "3. Restrictions"],
  ["contributions", "4. Contributions and Review Copies"],
  ["ownership", "5. Ownership"],
  ["termination", "6. Termination"],
  ["warranty", "7. Warranty Disclaimer"],
  ["liability", "8. Limitation of Liability"],
  ["open-source", "9. No Open-Source Grant"],
  ["acceptance", "10. Acceptance"],
]; const rights = [
  ["✓", "Personal use", "Allowed"],
  ["✓", "Educational use", "Allowed"],
  ["✓", "Non-profit institutions", "Allowed"],
  ["✓", "Private modification", "Allowed"],
  ["✕", "Commercial use", "Restricted"],
  ["✕", "Public redistribution", "Restricted"],
  ["✕", "Public forks / mirrors", "Restricted"],
  ["✕", "Hosted third-party use", "Restricted"],
];

export default function License() {
  const [active, setActive] = useState("definitions");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const observers = sections.map(([id]) => {
      const element = document.getElementById(id);

      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        {
          rootMargin: "-20% 0px -65% 0px",
        }
      );

      observer.observe(element);
      return observer;
    });

    const handleScroll = () => {
      setShowTop(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observers.forEach(observer => observer?.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="license-page">

      {/* HERO */}
      <header className="license-hero">
        <div className="license-badge">
          DPSAL · v1.0
        </div>

        <h1>Deep Projects<br />Source-Available License</h1>

        <p>
          A license built around personal freedom, private modification,
          transparency, and controlled distribution.
        </p>

        <div className="license-meta">
          <span>Copyright © 2024 Deep Projects</span>
          <span>10 Sections</span>
          <span>Not Open Source</span>
        </div>
      </header>

      {/* QUICK SUMMARY */}
      <section className="license-summary">
        <div className="summary-card positive">
          <span>✓</span>
          <div>
            <strong>Personal & Educational</strong>
            <p>Use, run, and privately modify the Software.</p>
          </div>
        </div>

        <div className="summary-card positive">
          <span>✓</span>
          <div>
            <strong>Source Available</strong>
            <p>Source may be available for inspection and private use.</p>
          </div>
        </div>

        <div className="summary-card negative">
          <span>✕</span>
          <div>
            <strong>Commercial Use</strong>
            <p>Commercial use requires prior written permission.</p>
          </div>
        </div>

        <div className="summary-card negative">
          <span>✕</span>
          <div>
            <strong>Public Redistribution</strong>
            <p>Public forks, mirrors, and redistribution are restricted.</p>
          </div>
        </div>
      </section>

      {/* LAYOUT */}
      <div className="license-layout">

        {/* SIDEBAR */}
        <aside className="license-nav">
          <div className="license-nav-inner">
            <span className="nav-label">CONTENTS</span>

            {sections.map(([id, title]) => (
              <button
                key={id}
                className={active === id ? "active" : ""}
                onClick={() => scrollTo(id)}
              >
                {title}
              </button>
            ))}

            <a
              className="raw-link"
              href="/LICENSE.md"
              target="_blank"
              rel="noreferrer"
            >
              View LICENSE.md ↗
            </a>
          </div>
        </aside>

        {/* LICENSE */}
        <article className="license-document">

          <section className="license-intro">
            <p className="eyebrow">LEGAL TERMS</p>
            <h2>Deep Projects Source-Available License v1.0</h2>
            <p>
              Copyright © 2024 Deep Projects
            </p>
          </section>

          <section id="definitions" className="license-section">
            <h2>1. Definitions</h2>

            <p>
              <strong>1.1</strong> 'Software' means the source code,
              documentation, builds, releases, assets, and any related files
              distributed by Deep Projects under this license.
            </p>

            <p>
              <strong>1.2</strong> 'Official Release' means a binary,
              installer, archive, or other release explicitly published by
              Deep Projects.
            </p>

            <p>
              <strong>1.3</strong> 'Modified Version' means any version of the
              Software that has been changed, adapted, translated, combined,
              or otherwise derived from the original Software.
            </p>

            <p>
              <strong>1.4</strong> 'Commercial Use' means any use in connection
              with a business, paid service, product, internal business
              operation, revenue-generating activity, or other for-profit
              activity.
            </p>
          </section>

          <section id="rights" className="license-section">
            <h2>2. Grant of Rights</h2>

            <p>
              Subject to the terms of this license, Deep Projects grants you
              a limited, non-exclusive, non-transferable, revocable license
              to:
            </p>

            <p>
              <strong>2.1</strong> Use the Software for personal, educational,
              and non-commercial use.
            </p>

            <p>
              <strong>2.2</strong> Use the Software in non-profit institutions,
              including schools, colleges, universities, NGOs, and government
              bodies, provided such use is not for commercial purposes.
            </p>

            <p>
              <strong>2.3</strong> Download, install, and run Official
              Releases.
            </p>

            <p>
              <strong>2.4</strong> Modify the Software privately for your own
              personal, educational, or non-commercial use, provided that such
              modifications are not shared, published, sold, or otherwise
              distributed except as permitted under Section 4.
            </p>

            <div className="rights-grid">
              {rights.map(([icon, title, status]) => (
                <div
                  className={`right-card ${
                    icon === "✓" ? "allowed" : "restricted"
                  }`}
                  key={title}
                >
                  <span>{icon}</span>
                  <div>
                    <strong>{title}</strong>
                    <small>{status}</small>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="restrictions" className="license-section">
            <h2>3. Restrictions</h2>

            <div className="warning-box">
              <span>!</span>
              <p>
                You may not, without prior written permission from Deep
                Projects:
              </p>
            </div>

            <p>
              <strong>3.1</strong> Sell, resell, sublicense, rent, lease,
              publish, distribute, or commercially exploit the Software or any
              Modified Version.
            </p>

            <p>
              <strong>3.2</strong> Use the Software or any Modified Version in
              any commercial product, commercial service, internal business
              system, paid deployment, or revenue-generating environment.
            </p>

            <p>
              <strong>3.3</strong> Publicly fork, mirror, republish, or
              redistribute the source code or any Modified Version.
            </p>

            <p>
              <strong>3.4</strong> Redistribute modified source code or
              modified binaries to the public.
            </p>

            <p>
              <strong>3.5</strong> Claim ownership of the Software or remove,
              alter, or obscure copyright notices, attribution notices, or
              license text.
            </p>

            <p>
              <strong>3.6</strong> Re-license the Software or any Modified
              Version.
            </p>

            <p>
              <strong>3.7</strong> Use Deep Projects’ names, logos, or
              trademarks in a way that suggests endorsement, sponsorship, or
              official status.
            </p>

            <p>
              <strong>3.8</strong> Host the Software as a service, platform, or
              hosted application for third parties, whether free or paid,
              without written permission.
            </p>
          </section>

          <section id="contributions" className="license-section">
            <h2>4. Contributions and Review Copies</h2>

            <p>
              <strong>4.1</strong> You may submit issues, suggestions, bug
              reports, and pull requests to Deep Projects.
            </p>

            <p>
              <strong>4.2</strong> By submitting a pull request, patch, or
              other contribution, you grant Deep Projects a perpetual,
              worldwide, royalty-free, irrevocable license to use, copy,
              modify, merge, publish, distribute, sublicense, and otherwise
              exploit that contribution as part of the Software or any
              derivative work.
            </p>

            <p>
              <strong>4.3</strong> If you create a Modified Version for private
              use, you may share that Modified Version with Deep Projects
              privately for review, feedback, or consideration.
            </p>

            <p>
              <strong>4.4</strong> Private sharing under Section 4.3 does not
              grant any right to public distribution, commercial use, or public
              publication.
            </p>
          </section>

          <section id="ownership" className="license-section">
            <h2>5. Ownership</h2>

            <p>
              All rights not expressly granted in this license are reserved by
              Deep Projects. Deep Projects retains all right, title, and
              interest in and to the Software, including all intellectual
              property rights, except for the limited rights expressly granted
              to you in this license.
            </p>
          </section>

          <section id="termination" className="license-section">
            <h2>6. Termination</h2>

            <p>
              This license is automatically terminated if you violate any term
              of this license. Upon termination, you must stop using the
              Software and destroy all copies of the Software and any Modified
              Versions in your possession or control, except where local law
              requires otherwise.
            </p>
          </section>

          <section id="warranty" className="license-section">
            <h2>7. Warranty Disclaimer</h2>

            <div className="quote-box">
              <p>
                The Software is provided 'AS IS', without warranty of any kind,
                express or implied, including but not limited to warranties of
                merchantability, fitness for a particular purpose, title, and
                non-infringement.
              </p>
            </div>
          </section>

          <section id="liability" className="license-section">
            <h2>8. Limitation of Liability</h2>

            <p>
              To the maximum extent permitted by law, Deep Projects shall not
              be liable for any claim, damages, losses, or other liability
              arising from the use of or inability to use the Software.
            </p>
          </section>

          <section id="open-source" className="license-section emphasis">
            <div className="not-open-source">
              <span>≠</span>

              <div>
                <p className="eyebrow">IMPORTANT DISTINCTION</p>
                <h2>9. No Open-Source Grant</h2>

                <p>
                  This license is not an open-source license. No term in this
                  license shall be interpreted to grant rights beyond those
                  expressly stated above.
                </p>
              </div>
            </div>
          </section>

          <section id="acceptance" className="license-section final-section">
            <p className="eyebrow">FINAL SECTION</p>
            <h2>10. Acceptance</h2>

            <p>
              By downloading, installing, using, modifying, or contributing to
              the Software, you agree to the terms of this license.
            </p>

            <div className="acceptance-card">
              <div>
                <strong>DPSAL v1.0</strong>
                <span>Deep Projects Source-Available License</span>
              </div>

              <a
                href="/LICENSE.md"
                target="_blank"
                rel="noreferrer"
              >
                Open full license ↗
              </a>
            </div>
          </section>

        </article>
      </div>

      {/* BACK TO TOP */}
      {showTop && (
        <button
          className="back-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

    </main>
  );
}