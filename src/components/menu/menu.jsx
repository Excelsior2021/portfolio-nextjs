"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import "./menu.scss"
import { useEffect } from "react"

const pages = ["bio", "projects", "contact"]

const MenuItem = ({ page, pathname, closeModal }) => (
  <li className="menu__item">
    <Link
      href={`/${page}`}
      className={
        pathname.includes(page) ? "menu__link menu__link--active" : "menu__link"
      }
      onClick={closeModal}>
      {page}
    </Link>
  </li>
)

const Menu = ({ displayMenu, closeModal }) => {
  const pathname = usePathname()
  return (
    <div
      className={displayMenu ? "menu menu--display" : "menu"}
      onClick={closeModal}>
      <ul className="menu__list">
        {pages.map(page => (
          <MenuItem
            key={page}
            page={page}
            pathname={pathname}
            closeModal={closeModal}
          />
        ))}
      </ul>
    </div>
  )
}

export default Menu
