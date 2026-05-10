import { experiences } from '../data/experience.js'

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Background</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Professional experience including internship work, application development, and client-based project delivery.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((exp) => (
            <article key={exp.id} className="exp-card">
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">{exp.company}</p>
                </div>
                <div className="exp-meta">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-type-badge">{exp.type}</span>
                </div>
              </div>

              <p className="exp-location">{exp.location}</p>
              <p className="exp-description">{exp.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
