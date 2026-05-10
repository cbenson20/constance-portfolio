export default function About() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About</span>
          <h2 className="section-title">A bit about me</h2>
        </div>

        <div className="about-grid">
          {/* Left column: photo + quick info */}
          <div className="about-visual">
            <img
              src="/your-photo.jpg"
              alt="Constance Benson professional profile photo"
              style={{
                width: "100%",
                borderRadius: "10px",
                border: "1px solid var(--border)",
              }}
            />

            <div className="about-quick-info">
              <div className="info-item">
                <span className="info-icon" aria-hidden="true">
                  📍
                </span>
                <span>Winnipeg, MB, Canada</span>
              </div>
              <div className="info-item">
                <span className="info-icon" aria-hidden="true">
                  💼
                </span>
                <span>Open to work</span>
              </div>
              <div className="info-item">
                <span className="info-icon" aria-hidden="true">
                  🎓
                </span>
                <span>RRC Polytech</span>
              </div>
            </div>
          </div>

          {/* Right column: bio text + CTAs */}
          <div className="about-text">
            <p>
              I have hands-on experience building and supporting software in
              professional, internship, and client-based environments. My work
              has included application development, backend features, API
              integration, database-driven systems, front-end implementation,
              documentation, and troubleshooting. I enjoy building practical
              software that connects systems, supports users, and solves real
              business problems.
            </p>

            <div className="about-cta">
              <a
                href="/resume.pdf"
                className="btn btn-primary"
                download
                aria-label="Download my resume (PDF)"
              >
                Download Resume
              </a>
              <button
                className="btn btn-secondary"
                onClick={() => scrollTo("#contact")}
                aria-label="Go to contact section"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
