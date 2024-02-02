import Link from "next/link"
import ProjectsList from "../_components/projects-list/project-list"
import projects from "../_store/projects.json"
import "./projects.scss"

export const metadata = {
  title: "Jonathan Kila | Projects",
  description: "Jonathan Kila Software Development Projects.",
}

const Projects = () => (
  <div className="projects">
    <p className="projects__text">
      Not an exhuastive list. Please check out my{" "}
      <Link
        className="projects__text-link"
        href="https://github.com/Excelsior2021"
        target="_blank"
        rel="noreferrer">
        GitHub
      </Link>{" "}
      profile for more projects.{" "}
      <Link
        className="projects__text-link"
        href="/frontend-mentor"
        rel="noreferrer">
        Frontend Mentor challenges
      </Link>
      .
    </p>

    <ProjectsList projects={projects} assetLocation="projects_images" />
  </div>
)

export default Projects
