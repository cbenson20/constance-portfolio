const recruiterRoles = [
  'Junior Software Developer',
  'Backend Developer',
  'API Integration',
  'Automation',
  'Full Stack',
]

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero-content">
        {/* Availability badge */}
        <div className="hero-badge" aria-label="Currently open to opportunities">
          <span className="hero-badge-dot" aria-hidden="true" />
          Open to opportunities
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="accent">Constance Benson</span>
        </h1>

        <p className="hero-subtitle">
          Software Developer focused on Backend, APIs &amp; Automation
        </p>

        <p className="hero-positioning">
          Software Developer helping teams build backend features, connect APIs, and improve workflow automation.
        </p>

        <p className="hero-intro">
          I build practical web and software applications with a focus on backend logic, API integration, automation, databases, and clean user experiences. I enjoy connecting systems, organizing data, and turning real business needs into useful digital solutions.
        </p>

        {/* Recruiter summary */}
        <div className="hero-recruiter-note" role="note" aria-label="Role interests">
          <span className="recruiter-label">Currently open to</span>
          <div className="recruiter-roles">
            {recruiterRoles.map((role) => (
              <span key={role} className="recruiter-role-pill">
                {role}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-actions">
          <button
            className="btn btn-primary"
            onClick={() => scrollTo('#projects')}
            aria-label="View my projects"
          >
            View Projects
          </button>
          <a
            href="/resume.pdf"
            className="btn btn-secondary"
            download
            aria-label="Download Constance Benson's resume (PDF)"
          >
            Download Resume
          </a>
          <button
            className="btn btn-outline-accent"
            onClick={() => scrollTo('#contact')}
            aria-label="Go to contact section"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}
