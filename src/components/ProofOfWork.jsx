const proofItems = [
  {
    icon: '👥',
    title: 'Real Client Capstone — Thrive Wellness App',
    description:
      'Designed database schemas (PostgreSQL via Supabase and Prisma), structured REST API endpoints, contributed to Express backend logic, and delivered for a real client through team-based development at RRC Polytech.',
  },
  {
    icon: '💼',
    title: 'Software Developer Internship — FANDF Consulting Inc.',
    description:
      'Completed a software development internship building full-stack features with React, TypeScript, and APIs. Contributed to proof-of-concept development, front-end structure improvements, API integration testing, and Git-based development workflows.',
  },
  {
    icon: '🛒',
    title: 'Ruby on Rails E-commerce Project',
    description:
      'Built a full MVC web application for a building materials business using Ruby on Rails: designed data models, implemented RESTful routing and controllers, structured database-backed product and category management.',
  },
  {
    icon: '📊',
    title: 'API Integration Dashboard',
    description:
      'Built a functional dashboard connecting REST and GraphQL APIs, using React and TypeScript with a reusable component architecture. Focused on data reliability, clean data flow, and structured UI.',
  },
  {
    icon: '📄',
    title: 'Resume',
    description:
      'A complete overview of my technical skills, professional experience, education, and project work.',
    action: { label: 'Download Resume', href: '/resume.pdf', download: true },
  },
]

export default function ProofOfWork() {
  return (
    <section id="proof" className="proof-of-work">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Credibility</span>
          <h2 className="section-title">Proof of Work</h2>
          <p className="section-subtitle">
            Real projects, real clients, and real development experience — not just a list of technologies.
          </p>
        </div>

        <div className="proof-grid">
          {proofItems.map((item) => (
            <div key={item.title} className="proof-item">
              <div className="proof-icon" aria-hidden="true">
                {item.icon}
              </div>
              <div className="proof-text">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                {item.action && (
                  <a
                    href={item.action.href}
                    className="btn btn-ghost btn-sm proof-item-action"
                    download={item.action.download || undefined}
                    target={item.action.external ? '_blank' : undefined}
                    rel={item.action.external ? 'noopener noreferrer' : undefined}
                    aria-label={item.action.label}
                  >
                    {item.action.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
