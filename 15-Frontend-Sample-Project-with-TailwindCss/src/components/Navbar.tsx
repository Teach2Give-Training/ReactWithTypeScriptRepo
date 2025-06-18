import { FaHome, FaInfo, FaPhone, FaSignInAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to="/">
                                <FaHome className=" text-green-600" />
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                <FaHome className=" text-green-600" />
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                            <FaPhone className="l text-green-600" />
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                            <FaSignInAlt className=" text-xl text-green-600" />
                            Login
                            </Link>
                            </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">My App</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    <li><Link to="/"><FaHome className=" text-green-600" />Home</Link></li>
                    <li><Link to="/about"><FaInfo className="  text-green-600" />About</Link></li>
                    <li><Link to="/contact"><FaPhone className="  text-green-600" />Contact</Link></li>
                    <li><Link to="/login"><FaSignInAlt className=" text-green-600" />Login</Link></li>

                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/register" className="btn  btn-success"><FaSignInAlt className=" text-green-600" />Register</Link>
            </div>
        </div>
    )
}

export default Navbar