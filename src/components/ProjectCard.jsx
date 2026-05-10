import { useState, useRef } from 'react'
import CaseStudy from './CaseStudy.jsx'

export default function ProjectCard({ project, isFeatured = false }) {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false)
  // Ref tracks the button that opened the modal, so focus can return on close
  const caseStudyBtnRef = useRef(null)

  const cardClass = [
    'project-card',
    isFeatured ? 'featured' : '',
    project.placeholder ? 'placeholder-card' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const openCaseStudy = () => setCaseStudyOpen(true)
  const closeCaseStudy = () => setCaseStudyOpen(false)

  return (
    <>
      <article className={cardClass}>
        {/* Screenshot image slot */}
        <div className="card-image">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
            />
          ) : project.privateProject ? (
            <div className="card-image-placeholder card-image-private" aria-label="Private project — preview withheld">
              <span className="private-label">{project.privateLabel || 'Private Client Project'}</span>
              <span className="private-note">{project.privateNote || 'Preview withheld for confidentiality. High-level case study available on request.'}</span>
            </div>
          ) : (
            <div className="card-image-placeholder" aria-label={`${project.title} — project preview`}>
              Project Preview
            </div>
          )}
        </div>

        {/* Focus area label */}
        <div className="card-meta">
          <span className="card-focus-label" aria-hidden="true">
            {project.tech.slice(0, 2).join(' · ')}
          </span>
        </div>

        <h3>{project.title}</h3>

        {project.placeholder && (
          <p className="placeholder-notice">
            ⚠ Placeholder — update project details when ready.
          </p>
        )}

        {/* Problem */}
        <div className="project-problem">
          <span className="field-label">Problem</span>
          <p>{project.problem}</p>
        </div>

        {/* Role */}
        <div>
          <span className="field-label">My Role</span>
          <p>{project.role}</p>
        </div>

        {/* Description */}
        <p>{project.description}</p>

        {/* Tech stack */}
        <div>
          <span className="field-label">Tech Stack</span>
          <div className="tech-stack" style={{ marginTop: '0.4rem' }}>
            {project.tech.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="card-actions">
          {/* Primary CTA */}
          {project.primaryAction === 'caseStudy' ? (
            <button
              ref={caseStudyBtnRef}
              className="btn btn-primary btn-sm"
              onClick={openCaseStudy}
              aria-label={`View ${project.title} case study`}
            >
              View Case Study
            </button>
          ) : (
            project.links?.project && (
              <a
                href={project.links.project}
                className="btn btn-primary btn-sm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} project (opens in new tab)`}
              >
                View Project
              </a>
            )
          )}

          {/* Live project link (when case study is primary) */}
          {project.primaryAction === 'caseStudy' && project.links?.project && (
            <a
              href={project.links.project}
              className="btn btn-secondary btn-sm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live site (opens in new tab)`}
            >
              View Live Site
            </a>
          )}

          {/* Secondary case study button (when project link is primary) */}
          {project.hasCaseStudy && project.primaryAction !== 'caseStudy' && (
            <button
              ref={caseStudyBtnRef}
              className="btn btn-secondary btn-sm"
              onClick={openCaseStudy}
              aria-label={`View ${project.title} case study`}
            >
              Case Study
            </button>
          )}

          {/* GitHub */}
          {project.links?.github && (
            <a
              href={project.links.github}
              className="btn btn-ghost btn-sm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub (opens in new tab)`}
            >
              GitHub
            </a>
          )}
        </div>
      </article>

      {/* Case study modal */}
      {caseStudyOpen && project.hasCaseStudy && (
        <CaseStudy
          title={project.title}
          caseStudy={project.caseStudy}
          onClose={closeCaseStudy}
          triggerRef={caseStudyBtnRef}
        />
      )}
    </>
  )
}
