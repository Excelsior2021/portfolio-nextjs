import Link from "next/link"
import ProjectsList from "../_components/projects-list/project-list"
import challenges from "../_store/frontend-mentor-challenges.json"
import "./frontend-mentor.scss"

const FrontendMentor = () => (
  <div className="frontend-mentor">
    <p className="frontend-mentor__text">
      This is a list of{" "}
      <Link
        className="projects__text-link"
        href="https://www.frontendmentor.io/profile/Excelsior2021"
        target="_blank"
        rel="noreferrer">
        Frontend Mentor
      </Link>{" "}
      challeges I have completed. These challenges help sharpen frontend
      development skills. Challenges usually involve building an app/component
      from a design system and you are encouraged to colloborate with others on
      the platform.
    </p>
    <ProjectsList
      projects={challenges}
      assetLocation="frontend_mentor_images"
    />
  </div>
)

export default FrontendMentor
