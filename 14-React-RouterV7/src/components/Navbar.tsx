import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyApp</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }: { isActive: boolean }) => isActive ? "active" : ""}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-us" className={({ isActive }: { isActive: boolean }) => isActive ? "active" : ""}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }: { isActive: boolean }) => isActive ? "active" : ""}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}