import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-content">
        <p className="contact-intro">
          I'm always interested in hearing about new projects and opportunities. 
          Feel free to reach out through any of the channels below.
        </p>
        <div className="contact-methods">
          <a href="mailto:sanjaymb26@gmail.com" className="contact-method">
            <Mail size={24} />
            <div>
              <h4>Email</h4>
              <p>sanjaymb26@gmail.com</p>
            </div>
          </a>
          <a href="tel:+917975522564" className="contact-method">
            <Phone size={24} />
            <div>
              <h4>Phone</h4>
              <p>+91-7975522564</p>
            </div>
          </a>
          <div className="contact-method">
            <MapPin size={24} />
            <div>
              <h4>Location</h4>
              <p>Bengaluru, Karnataka, India</p>
            </div>
          </div>
        </div>
        <div className="contact-social">
          <h3>Connect With Me</h3>
          <div className="social-links">
            <a href="https://github.com/Sanjay26445" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={28} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/sanjay-mb-9190661aa/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={28} />
              <span>LinkedIn</span>
            </a>
            <a href="https://sanjay26445.github.io/personal_portfolio/" target="_blank" rel="noopener noreferrer" className="social-link">
              <span className="portfolio-icon">🌐</span>
              <span>Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
