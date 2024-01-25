import ProjectItem from "../_components/ProjectItem/ProjectItem"
import projects from "../_store/projects"
import "./projects.scss"

export const metadata = {
  title: "Jonathan Kila | Projects",
  description: "Jonathan Kila Software Development Projects.",
}

const Projects = () => (
  <div className="projects">
    <p className="projects__text">
      Not an exhuastive list. Please check out my{" "}
      <a
        className="projects__text-link"
        href="https://github.com/Excelsior2021"
        target="_blank"
        rel="noreferrer">
        GitHub
      </a>{" "}
      profile for more projects.
    </p>
    <ul className="projects__list">
      {projects.map(project => (
        <ProjectItem
          key={project.name}
          name={project.name}
          description={project.description}
          img={`./assets/project_images/${project.id}.png`}
          stack={project.stack}
          url={project.url}
          alt={project.alt}
          github={project.github}
        />
      ))}
    </ul>
  </div>
)

export default Projects
