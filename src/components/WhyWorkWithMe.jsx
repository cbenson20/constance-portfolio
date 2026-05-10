const qualities = [
  'Consistent and self-motivated',
  'Teachable and open to feedback',
  'Clear written and verbal communication',
  'Focused on practical, working software',
  'Works well with a team',
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
              I'm reliable, teachable, and serious about doing good work. I care about writing code that is clear, organized, and easy to maintain. I also communicate well, ask questions when I need clarity, and enjoy working with a team to get things done properly.
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
