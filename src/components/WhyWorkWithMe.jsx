const qualities = [
  'Consistent and self-motivated',
  'Teachable and open to feedback',
  'Clear written and verbal communication',
  'Focused on practical, working software',
  'Strong collaboration and team mindset',
  'Cares about code quality and clean structure',
]

export default function WhyWorkWithMe() {
  return (
    <section id="why-work-with-me" className="why-work-with-me">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why Me</span>
          <h2 className="section-title">Why Work With Me</h2>
        </div>

        <div className="why-inner">
          <div className="why-quote">
            <p>
              I bring a mix of technical skill, creativity, curiosity, and strong communication. I'm consistent, teachable, and serious about building useful software. I care about clean code, practical solutions, clear documentation, and contributing positively to a team.
            </p>
          </div>

          <ul className="why-qualities" role="list">
            {qualities.map((quality) => (
              <li key={quality} className="quality-item" role="listitem">
                <span className="quality-check" aria-hidden="true">✓</span>
                {quality}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
