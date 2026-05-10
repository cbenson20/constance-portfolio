import ProjectCard from './ProjectCard.jsx'
import { featuredProjects, moreProjects } from '../data/projects.js'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A selection of projects built through client work, team collaboration, internship experience, and personal development.
          </p>
        </div>

        {/* Featured Projects */}
        <div
          className="featured-projects"
          aria-label="Featured projects"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isFeatured />
          ))}
        </div>

        {/* More Projects */}
        <div className="more-projects-section-header">
          <h3>More Projects</h3>
        </div>
        <div
          className="more-projects-grid"
          aria-label="More projects"
        >
          {moreProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isFeatured={false} />
          ))}
        </div>
      </div>
    </section>
  )
}
