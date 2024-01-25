"use client"
import { ThemeProvider as Provider } from "next-themes"

const ThemeProvider = ({ children }) => <Provider>{children}</Provider>

export default ThemeProvider
