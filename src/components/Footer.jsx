export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo">
          Constance <span>Benson</span>
        </span>

        <p className="footer-copy">
          &copy; {year} Constance Benson. Built with React and Vite.
        </p>

        <nav className="footer-links" aria-label="Footer links">
          <a
            href="https://github.com/cbenson20"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bensonconstance"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  )
}
