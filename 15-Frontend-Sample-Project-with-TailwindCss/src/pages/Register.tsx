import { Link } from "react-router";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import loginImg from "../../src/assets/register.svg";

export const Register = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100 flex items-center justify-center py-10">
        <div className="grid sm:grid-cols-2 gap-10 bg-white rounded-3xl  overflow-hidden w-full max-w-5xl">
          {/* Form Section */}
          <div className="flex items-center justify-center p-8">
            <form className="w-full max-w-md space-y-6 bg-white rounded-2xl  p-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">Register</div>
                <p className="text-gray-500">Create your account</p>
              </div>
              <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="first_name"
                  >
                    First Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border  bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-300  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    type="text"
                    id="first_name"
                    placeholder="First Name"
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="last_name"
                  >
                    Last Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border  bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-300  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    type="text"
                    id="last_name"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <label
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border  bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-300  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="email"
                id="email"
                placeholder="Email"
              />
              <label
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border  bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-300  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="password"
                id="pasword"
                placeholder="Password"
              />
              <button type="submit" className="btn btn-s btn-circle btn-block mt-4 shadow-md hover:scale-105 transition-transform">
                Register
              </button>
              <div className="flex  text-center mt-4">
                <Link to="/" className="text-blue-500 hover:underline flex items-center justify-center gap-1">
                  <span role="img" aria-label="home">🏡</span> Go to HomePage
                </Link>
                <Link to="/login" className="text-green-500 hover:underline flex items-center justify-center gap-1">
                  <span role="img" aria-label="home"></span> Login
                </Link>
              </div>
            </form>
          </div>
          {/* Image Section */}
          <div className="hidden sm:flex items-center justify-center bg-gradient-to-tr from-blue-200 via-pink-100 to-white">
            <img src={loginImg} alt="Register" width={400} className="rounded-2xl s" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};