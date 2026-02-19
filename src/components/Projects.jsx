import { Github, ExternalLink } from 'lucide-react'
import './Projects.css'

export default function Projects() {
  const projects = [
    {
      title: 'Crime Analysis and Prediction Portal',
      description: 'Web application for analyzing and predicting crimes against foreigners in India using machine learning.',
      tech: ['Django', 'Python', 'XGBoost', 'LSTM', 'Plotly', 'Machine Learning'],
      features: ['Data visualization with Choropleth maps', 'ML-based predictions', 'Interactive dashboards'],
      github: 'https://github.com/Sanjay26445/Analysis-and-Prediction-of-Crimes-against-foreigners',
      demo: '#'
    },
    {
      title: 'Cricket Live Match Analytics & Win Prediction',
      description: 'React-based cricket live score and win probability dashboard with real-time match data.',
      tech: ['React', 'JavaScript', 'Data Visualization'],
      features: ['Live score updates', 'Win probability predictions', 'Interactive visualizations'],
      github: 'https://github.com/Sanjay26445/cricket-live-dashboard-and-analytics',
      demo: '#'
    },
    {
      title: 'Study Mate',
      description: 'Full-stack educational platform enabling users to resolve doubts and connect with study partners.',
      tech: ['Python', 'Django', 'HTML', 'CSS'],
      features: ['Doubt resolution system', 'Study partner matching', 'Progress tracking'],
      github: 'https://github.com/Sanjay26445/StudyMate',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-features">
              {project.features.map((feature, i) => (
                <span key={i} className="feature-badge">✓ {feature}</span>
              ))}
            </div>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                <Github size={18} /> Code
              </a>
              {project.demo !== '#' && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                  <ExternalLink size={18} /> Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
