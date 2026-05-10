const openToRoles = [
  "Junior Software Developer",
  "Backend Developer",
  "API Integration",
  "Automation",
  "Full Stack Development",
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Let's Connect</span>
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-text">
            <p>
              Interested in working together or discussing an opportunity? I'd
              be happy to connect.
            </p>

            <address style={{ fontStyle: "normal" }}>
              <ul className="contact-info-list" role="list">
                <li className="contact-info-item">
                  <span className="contact-icon" aria-hidden="true">
                    ✉️
                  </span>
                  <a href="mailto:bensonconstance10@gmail.com">
                    bensonconstance10@gmail.com
                  </a>
                </li>
                <li className="contact-info-item">
                  <span className="contact-icon" aria-hidden="true">
                    📍
                  </span>
                  <span>Winnipeg, MB, Canada</span>
                </li>
                <li className="contact-info-item">
                  <span className="contact-icon" aria-hidden="true">
                    🔗
                  </span>
                  <a
                    href="https://www.linkedin.com/in/bensonconstance"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                  >
                    linkedin.com/in/bensonconstance
                  </a>
                </li>
                <li className="contact-info-item">
                  <span className="contact-icon" aria-hidden="true">🐙</span>
                  <a
                    href="https://github.com/cbenson20"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                  >
                    github.com/cbenson20
                  </a>
                </li>
              </ul>
            </address>

            <div className="contact-actions">
              <a
                href="mailto:bensonconstance10@gmail.com"
                className="btn btn-primary"
                aria-label="Send me an email"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/bensonconstance"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View LinkedIn profile"
              >
                View LinkedIn
              </a>
              <a
                href="https://github.com/cbenson20"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub profile"
              >
                View GitHub
              </a>
              <a
                href="/resume.pdf"
                className="btn btn-outline-accent"
                download
                aria-label="Download my resume (PDF)"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right: open to card */}
          <div className="open-to-card">
            <h3>Currently open to</h3>
            <p>
              I'm actively looking for opportunities where I can contribute,
              learn, and grow as a developer.
            </p>
            <ul className="open-to-list" role="list">
              {openToRoles.map((role) => (
                <li key={role} className="open-to-item">
                  <span className="open-to-arrow" aria-hidden="true">
                    →
                  </span>
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
