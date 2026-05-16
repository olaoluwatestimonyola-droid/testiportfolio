import './Skills.css'

function Skills() {

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Git',
    'Firebase',
  ]

  return (
    <section className="skills">

      <h1 data-aos="fade-up">
        My Skills
      </h1>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            data-aos="zoom-in"
          >
            <h2>{skill}</h2>
          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills