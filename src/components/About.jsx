import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm an MCA graduate from RV College of Engineering with a strong foundation in full-stack development, 
            data analysis, and machine learning. With hands-on experience in building scalable web applications and 
            implementing ML solutions, I'm passionate about solving real-world problems through technology.
          </p>
          <p>
            My journey in tech has been marked by continuous learning and practical application of concepts. 
            I've published research on machine learning applications and developed multiple projects that showcase 
            my ability to work across the entire development stack.
          </p>
        </div>
        <div className="education">
          <h3>Education</h3>
          <div className="edu-item">
            <div className="edu-header">
              <h4>Master of Computer Applications (MCA)</h4>
              <span className="year">2023 – 2025</span>
            </div>
            <p className="edu-school">RV College of Engineering, Bangalore</p>
            <p className="edu-cgpa">CGPA: 8.32</p>
          </div>
          <div className="edu-item">
            <div className="edu-header">
              <h4>Bachelor of Computer Applications (BCA)</h4>
              <span className="year">2020 – 2023</span>
            </div>
            <p className="edu-school">Bapuji Institute of Hi-Tech Education, Davanagere</p>
            <p className="edu-cgpa">CGPA: 8.61</p>
          </div>
        </div>
      </div>
    </section>
  )
}
