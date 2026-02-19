import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'JavaScript', 'HTML', 'CSS']
    },
    {
      category: 'Frontend',
      skills: ['React', 'Bootstrap', 'CSS3']
    },
    {
      category: 'Backend',
      skills: ['Django', 'Python']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'SQL', 'Machine Learning', 'Data Analysis']
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="skill-category">
            <h3>{cat.category}</h3>
            <div className="skill-tags">
              {cat.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
