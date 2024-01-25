import Link from "next/link"
import "./bio.scss"

export const metadata = {
  title: "Jonathan Kila | Bio",
  description: "Jonathan Kila Software Development Bio.",
}

const Bio = () => (
  <div className="bio">
    <div className="bio__headshot">
      <img
        className="bio__img"
        src="./assets/images/headshot.jpg"
        alt="jonathan kila"
      />
    </div>

    <div className="bio__text-container">
      <p className="bio__text">
        I love technology and solving problems. Tech is the main way we'll solve
        problems in the future. I want to contribute to solving these problems.
      </p>

      <p className="bio__text">
        I am a developer, whose passion for solving problems through programming
        grows from strength to strength as I continue to learn and develop.
      </p>
    </div>

    <Link
      href="https://www.codewars.com/users/excelsior2021"
      target="_blank"
      rel="noreferrer"
      className="bio__link">
      <div className="bio__codewars">
        <label className="bio__codewars-label">Codewars</label>
        <img
          src="https://www.codewars.com/users/excelsior2021/badges/large"
          alt="codewars badge"
          className="bio__codewars-img"
        />
      </div>
    </Link>
  </div>
)

export default Bio
