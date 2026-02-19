import { Moon, Sun } from 'lucide-react'
import './Header.css'

export default function Header({ isDark, setIsDark }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Sanjay M B</h1>
        </div>
        <nav className="nav-links">
          <a onClick={() => scrollToSection('about')} className="nav-link">About</a>
          <a onClick={() => scrollToSection('skills')} className="nav-link">Skills</a>
          <a onClick={() => scrollToSection('projects')} className="nav-link">Projects</a>
          <a onClick={() => scrollToSection('publications')} className="nav-link">Publications</a>
          <a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
        </nav>
        <button 
          className="theme-toggle"
          onClick={() => setIsDark(!isDark)}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  )
}
