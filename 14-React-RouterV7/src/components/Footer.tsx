
import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} MyApp. All rights reserved.</span>
    </footer>
  )
}