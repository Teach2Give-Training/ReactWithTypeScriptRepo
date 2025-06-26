import { useState } from "react";
import { BiHome, BiInfoCircle, BiPhone } from "react-icons/bi";
import { MdRestaurant } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { FaSignOutAlt } from "react-icons/fa";
import { GrDashboard } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { clearCredentials } from "../features/auth/authSlice";
import { userApi } from "../features/api/userApi";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
    const userId = user?.userId;
     const { data: userDetails = [] } = userApi.useGetUserByIdQuery(userId, {
        skip: !isAuthenticated
      })

    const profilePicture = userDetails?.profileUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(userDetails.firstName)}&background=4ade80&color=fff&size=128`;

    const handleLogout = () => {
        dispatch(clearCredentials());
        navigate("/");
    };


    return (
        <div className="navbar bg-gradient-to-r from-orange-50 to-amber-50 shadow-lg sticky top-0 z-50 border-b border-orange-200">
            {/* Navbar Start */}
            <div className="navbar-start">
                {/* Mobile Dropdown */}
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden hover:bg-orange-100"
                        onClick={toggleMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-orange-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </div>
                    {isMenuOpen && (
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-box w-52 border border-orange-100"
                        >
                            <li>
                                <a href="/" className="text-gray-700 hover:text-orange-600 hover:bg-orange-50" onClick={closeMenu}>
                                    <BiHome className="text-lg text-orange-600" />
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/foods" className="text-gray-700 hover:text-orange-600 hover:bg-orange-50" onClick={closeMenu}>
                                    <BiInfoCircle className="text-lg text-orange-600" />
                                    Meals
                                </a>
                            </li>

                            <li>
                                <a href="/contact" className="text-gray-700 hover:text-orange-600 hover:bg-orange-50" onClick={closeMenu}>
                                    <BiPhone className="text-lg text-orange-600" />
                                    Contact
                                </a>
                            </li>
                            <div className="divider my-2"></div>
                            <li>
                                <a href="/login" className="text-gray-700 hover:text-orange-600" onClick={closeMenu}>
                                    Login
                                </a>
                            </li>
                            <li>
                                <a href="/register" className="btn btn-sm bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-none" onClick={closeMenu}>
                                    Sign Up
                                </a>
                            </li>
                        </ul>
                    )}
                </div>

                {/* Logo */}
                <a href="/" className="btn btn-ghost text-xl hover:bg-orange-100 px-2">
                    <MdRestaurant className="text-2xl text-orange-600" />
                    <span className="font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                        Mathe`s Special
                    </span>
                </a>
            </div>

            {/* Navbar Center - Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li>
                        <a href="/" className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200">
                            <BiHome className="text-lg text-orange-600" />
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/foods" className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200">
                            <BiInfoCircle className="text-lg text-orange-600" />
                            Meals
                        </a>
                    </li>

                    <li>
                        <a href="/contact" className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200">
                            <BiPhone className="text-lg text-orange-600" />
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            {/* Navbar End - Auth Buttons */}
            {!isAuthenticated ? (
                <div className="navbar-end hidden lg:flex gap-2">
                    <a href="/login" className="btn btn-ghost text-gray-700 hover:text-orange-600 hover:bg-orange-50">
                        Login
                    </a>
                    <a href="/register" className="btn bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-none shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        Sign Up
                    </a>
                </div>
            ) : (
                <div className="navbar-end hidden lg:flex gap-2 ">
                    <div className="dropdown dropdown-end ">
                        <button className="btn btn-ghost flex items-center bg-orange-500">
                            <div className="flex items-center">
                                <span className="text-dark mr-2">Hey, {userDetails.firstName} </span>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="profile"
                                            src={profilePicture} />
                                    </div>
                                </div>

                            </div>
                        </button>
                        <ul className="dropdown-content bg-neutral-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <Link
                                    to={user.userType === "admin" ? '/admindashboard/analytics' : '/dashboard/me'}
                                    className="flex items-center text-slate-950 hover:text-gray-300 mb-2"
                                >
                                    <GrDashboard className="mr-3 text-xl text-orange-600" />
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center text-slate-950 hover:text-gray-300"
                                >
                                    <FaSignOutAlt className="text-xl text-orange-600 mr-3" />
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

        </div>
    );
};