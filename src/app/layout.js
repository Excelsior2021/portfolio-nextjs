import Header from "./_components/header/header"
import PendoProvider from "./_context/pendo-provider"
import ThemeProvider from "./_context/theme-provider"
import "./_styles/_globals.scss"

export const metadata = {
  title: "Jonathan Kila | Web Developer",
  description: "Jonathan Kila Web Developer",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="icon.png" sizes="any" />
      <body>
        <div className="counter">
          <img
            src="https://www.free-website-hit-counter.com/c.php?d=9&id=142620&s=5"
            alt="Hit Counter"
          />
        </div>
        <ThemeProvider>
          <PendoProvider>
            <Header />
            <main className="main">{children}</main>
          </PendoProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
