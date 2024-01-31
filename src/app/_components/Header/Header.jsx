"use client"
import { useState } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import Menu from "../menu/menu"
import "./header.scss"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const handleMenuOpen = menuOpen => {
    const body = document.querySelector("body")
    if (menuOpen) body.classList.remove("body--menu-open")
    else body.classList.add("body--menu-open")
    setMenuOpen(!menuOpen)
  }

  return (
    <header className={menuOpen ? "header header--menu-open" : "header"}>
      <div className="header__container">
        <Link href="/" className="header__logo-link">
          <span className="header__logo" onClick={() => setMenuOpen(false)}>
            Jonathan Kila
          </span>
        </Link>

        <nav className="nav">
          <div
            className="nav__icon-container"
            onClick={() => handleMenuOpen(menuOpen)}>
            <img
              className="nav__icon"
              src={
                menuOpen
                  ? "./assets/icons/menu-close.svg"
                  : "./assets/icons/menu.svg"
              }
              alt="menu"
            />
          </div>
          <Menu
            displayMenu={menuOpen}
            closeModal={() => handleMenuOpen(true)}
          />
          <div
            className={
              menuOpen
                ? "header__theme-toggle-container header__theme-toggle-container--display"
                : "header__theme-toggle-container"
            }
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <img
              className="header__theme-toggle header__theme-toggle--light"
              src="./assets/icons/light.svg"
              alt="theme toggle"
            />
            <img
              className="header__theme-toggle header__theme-toggle--dark"
              src="./assets/icons/dark.svg"
              alt="theme toggle"
            />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
