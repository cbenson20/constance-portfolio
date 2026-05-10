const services = [
  {
    icon: '⚙️',
    title: 'Backend Development',
    description:
      'I build server-side features, organize application logic, and work with MVC structure, APIs, and databases to support reliable backend systems.',
  },
  {
    icon: '🔗',
    title: 'API Integration',
    description:
      'I connect applications to REST and GraphQL APIs, handle data flow, support backend integration logic, and help ensure reliable communication between systems.',
  },
  {
    icon: '🤖',
    title: 'Automation & Workflow Support',
    description:
      'I help reduce repetitive manual work through automation, scripts, integration logic, and cleaner development workflows.',
  },
  {
    icon: '🌐',
    title: 'Web Application Development',
    description:
      'I build responsive, user-friendly web applications with clean interfaces, organized code structure, and practical functionality.',
  },
]

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="what-i-do">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">
            The kinds of problems I help teams solve.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
