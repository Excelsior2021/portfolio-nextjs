"use client"
import { useState } from "react"
import Link from "next/link"
import "./ProjectItem.scss"

const ProjectItem = props => {
  const [cardOpen, setCardOpen] = useState(false)

  return (
    <li className="project-item">
      <div className="project">
        <div className="project__head">
          <h2 className="project__name project__name--mobile">
            <Link
              className="project__link"
              href={props.url}
              target="_blank"
              rel="noreferrer">
              {props.name}
            </Link>
          </h2>
          <img
            className="project__card-arrow"
            src={
              cardOpen
                ? "./assets/icons/arrow-up.png"
                : "./assets/icons/arrow-down.png"
            }
            alt="open/close project card"
            width="50px"
            onClick={() => setCardOpen(!cardOpen)}
          />
        </div>

        <div
          className={
            cardOpen
              ? "project__body project__body--desktop"
              : "project__body project__body--close project__body--desktop"
          }>
          <div className="project__image-container">
            <Link href={props.url} target="_blank" rel="noreferrer">
              <img
                className="project__image"
                src={props.img}
                alt={props.alt}
                role="project image and link to project site"
              />
            </Link>
          </div>
          <h2 className="project__name project__name--desktop">
            <Link
              className="project__link"
              href={props.url}
              target="_blank"
              rel="noreferrer">
              {props.name}
            </Link>
          </h2>
          <div className="project__description">
            <p>{props.description}</p>
          </div>
          <Link
            className="project__github-link"
            href={props.github}
            target="_blank">
            <img
              className="project__github"
              src="./assets/contact_icons/github.svg"
              alt="github"
            />
          </Link>
          <div className="project__stack">
            <p>{props.stack}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ProjectItem
