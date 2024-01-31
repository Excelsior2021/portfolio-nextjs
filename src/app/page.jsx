import "./landing.scss"

const stack = [
  "React",
  "SolidJS",
  "SASS",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Python",
]

const Landing = () => (
  <div className="landing">
    <div className="landing__container">
      <p data-test="landing_heading" className="landing__heading">
        Hi, my name is Jonathan
      </p>
      <p data-test="landing_sub-heading" className="landing__sub-heading">
        I love building functional UIs
      </p>
      <ul data-test="landing_stack" className="landing__stack">
        {stack.map(tech => (
          <li key={tech} className="landing__stack-item">
            {tech}.
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default Landing
