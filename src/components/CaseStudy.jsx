import { useEffect, useRef } from 'react'

export default function CaseStudy({ title, caseStudy, onClose, triggerRef }) {
  const headingRef = useRef(null)

  useEffect(() => {
    // Move focus into modal on open
    headingRef.current?.focus()

    // Keyboard: close on Escape
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)

    // Lock body scroll
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
      // Return focus to the button that opened the modal
      triggerRef?.current?.focus()
    }
  }, [onClose, triggerRef])

  return (
    <div
      className="modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-panel">
        {/* Sticky header */}
        <div className="modal-header">
          <div className="modal-header-text">
            <span className="modal-eyebrow">Case Study</span>
            <h2
              id="modal-title"
              className="modal-title"
              ref={headingRef}
              tabIndex={-1}
              style={{ outline: 'none' }}
            >
              {title}
            </h2>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close case study"
          >
            ×
          </button>
        </div>

        {/* Scrollable body */}
        <div className="modal-body">
          <div className="cs-section">
            <h4>Project Overview</h4>
            <p>{caseStudy.overview}</p>
          </div>

          <div className="cs-section">
            <h4>Problem</h4>
            <p>{caseStudy.problem}</p>
          </div>

          <div className="cs-section">
            <h4>My Role</h4>
            <p>{caseStudy.role}</p>
          </div>

          <div className="cs-section">
            <h4>Tools &amp; Technologies</h4>
            <div className="tech-stack" style={{ marginTop: '0.5rem' }}>
              {caseStudy.tools.map((tool) => (
                <span key={tool} className="tag">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="cs-section">
            <h4>Key Features</h4>
            <ul className="cs-features">
              {caseStudy.keyFeatures.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="cs-section">
            <h4>Technical Focus</h4>
            <p>{caseStudy.technicalFocus}</p>
          </div>

          {caseStudy.additionalSections?.map((section) => (
            <div className="cs-section" key={section.heading}>
              <h4>{section.heading}</h4>
              {Array.isArray(section.content) ? (
                <ul className="cs-features">
                  {section.content.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              ) : (
                <p>{section.content}</p>
              )}
            </div>
          ))}

          {caseStudy.screenshots?.length > 0 && (
            <div className="cs-section">
              <h4>Screenshots</h4>
              <div className="cs-screenshots">
                {caseStudy.screenshots.map((shot) => (
                  <figure key={shot.src} className="cs-screenshot">
                    <img src={shot.src} alt={shot.alt} loading="lazy" />
                    <figcaption>{shot.alt}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          <div className="cs-section">
            <h4>What I Learned</h4>
            <p>{caseStudy.learned}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
