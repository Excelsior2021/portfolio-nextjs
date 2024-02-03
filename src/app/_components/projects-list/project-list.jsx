"use-client"
import ProjectItem from "../project-item/project-item"
import "./project-list.scss"

const ProjectsList = ({ projects, assetLocation }) => (
  <ul className="projects-list">
    {projects.map(project => (
      <ProjectItem
        key={project.name}
        name={project.name}
        description={project.description}
        img={`/assets/${assetLocation}/${project.id}.png`}
        stack={project.stack}
        url={project.url}
        alt={project.alt}
        github={project.github}
      />
    ))}
  </ul>
)

export default ProjectsList
