import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">Python Developer</h2>
        <p className="hero-subtitle">
          MCA Graduate from RV College of Engineering with expertise in Python, JavaScript, Django, and React. 
          Passionate about building scalable web applications and machine learning solutions.
        </p>
        <div className="hero-info">
          <div className="info-item">
            <span className="label">Location:</span>
            <span>Bengaluru, Karnataka</span>
          </div>
          <div className="info-item">
            <span className="label">Email:</span>
            <a href="mailto:sanjaymb26@gmail.com">sanjaymb26@gmail.com</a>
          </div>
          <div className="info-item">
            <span className="label">Phone:</span>
            <a href="tel:+917975522564">+91-7975522564</a>
          </div>
        </div>
        <div className="hero-links">
          <a href="https://github.com/Sanjay26445" target="_blank" rel="noopener noreferrer" className="link-btn">
            <Github size={20} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/sanjay-mb" target="_blank" rel="noopener noreferrer" className="link-btn">
            <Linkedin size={20} /> LinkedIn
          </a>
          <a href="https://sanjaymb.netlify.app/" target="_blank" rel="noopener noreferrer" className="link-btn">
            <ExternalLink size={20} /> Portfolio
          </a>
          <a href="mailto:sanjaymb26@gmail.com" className="link-btn">
            <Mail size={20} /> Email
          </a>
        </div>
      </div>
    </section>
  )
}
