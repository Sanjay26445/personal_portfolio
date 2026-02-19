import { FileText, ExternalLink } from 'lucide-react'
import './Publications.css'

export default function Publications() {
  return (
    <section id="publications" className="publications">
      <h2 className="section-title">Publications</h2>
      <div className="publication-card">
        <div className="pub-header">
          <FileText size={32} className="pub-icon" />
          <div className="pub-title-section">
            <h3>Analysis and Prediction of Crimes Against Foreign Tourists in India Using Machine Learning Algorithms</h3>
            <p className="pub-conference">CSITSS-2025 International Conference</p>
          </div>
        </div>
        <p className="pub-description">
          Primary author of an IEEE-published research paper on machine learning-based analysis and prediction of crimes 
          against foreign tourists in India using NCRB datasets. This work demonstrates the application of advanced ML 
          techniques to real-world social problems.
        </p>
        <div className="pub-details">
          <span className="detail-item">
            <strong>Status:</strong> Published
          </span>
          <span className="detail-item">
            <strong>Type:</strong> Peer-Reviewed Conference Paper
          </span>
        </div>
        <a 
          href="https://ieeexplore.ieee.org/document/11294220" 
          target="_blank" 
          rel="noopener noreferrer"
          className="pub-link"
        >
          <ExternalLink size={18} /> Read on IEEE Xplore
        </a>
      </div>
    </section>
  )
}
