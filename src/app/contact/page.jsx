import Link from "next/link"
import "./contact.scss"
import Image from "next/image"

const contacts = [
  {
    name: "github",
    link: "https://github.com/Excelsior2021",
    img: "./assets/contact_icons/github.svg",
    alt: "github",
    ariaLabel: "jonathan kila github profile",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/jonathan-kila",
    img: "./assets/contact_icons/linkedin.svg",
    alt: "linkedin",
    ariaLabel: "jonathan kila linkedin profile",
  },
  {
    name: "email",
    link: "mailto: jonathan.kila10@gmail.com",
    img: "./assets/contact_icons/mail.svg",
    alt: "email",
    ariaLabel: "email jonathan kila",
  },
]

export const metadata = {
  title: "Jonathan Kila | Contact",
  description: "Jonathan Kila Contact.",
}

const Contact = () => (
  <div className="contact">
    <div className="contact__icons">
      {contacts.map(({ name, link, img, alt, ariaLabel }) => (
        <Link
          key={name}
          className="contact__icons-link"
          href={link}
          target="_blank"
          rel="noreferrer">
          <Image
            className="contact__icons-img"
            alt={alt}
            src={img}
            aria-label={ariaLabel}
            width={100}
            height={100}
          />
        </Link>
      ))}
    </div>
  </div>
)

export default Contact
