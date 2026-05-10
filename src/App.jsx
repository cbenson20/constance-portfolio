import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import WhatIDo from './components/WhatIDo.jsx'
import ProofOfWork from './components/ProofOfWork.jsx'
import WhyWorkWithMe from './components/WhyWorkWithMe.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './styles/global.css'

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <WhatIDo />
        <ProofOfWork />
        <WhyWorkWithMe />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
