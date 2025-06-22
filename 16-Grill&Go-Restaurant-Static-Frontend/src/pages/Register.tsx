import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import loginImg from "../../src/assets/register.svg";
import { useForm } from "react-hook-form"
import { Toaster,toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { userApi } from "../features/api/userApi";

type userRegisterForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string
}

export const Register = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<userRegisterForm>()

  const [registerUser,{isLoading}] = userApi.useRegisterUserMutation()



    const onSubmit = async(data:userRegisterForm)=>{
      const loadingToastId = toast.loading("Creating Account...")
      // console.log(data)
        try {
          const res = await registerUser(data).unwrap()
          console.log(res)
          toast.success(res.message,{id:loadingToastId})
          navigate('/login')
        } catch (err:any) {
          console.log('Failed Register: ', err)
          toast.error('Failed register:' + (err.data?.message))
          toast.dismiss(loadingToastId)
        }
    }

  return (
    <>
    <Toaster
    richColors
    position="top-right"
    />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 flex items-center justify-center py-10">
        <div className="grid sm:grid-cols-2 gap-10 bg-white rounded-3xl  overflow-hidden w-full max-w-5xl">
          {/* Form Section */}
          <div className="flex items-center justify-center p-8">
            <form className="w-full max-w-md space-y-6 bg-white rounded-2xl  p-8" onSubmit={handleSubmit(onSubmit)}>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">Register</div>
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
                    {...register('firstName', { required: true })}
                  />
                  {errors.firstName && <span className="text-red-500">First Name is Required</span>}
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
                    {...register('lastName', { required: true })}
                  />
                  {errors.lastName && <span className="text-red-500">Last Name is Required</span>}
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
                {...register('email', { required: true })}
              />
              {errors.email && <span className="text-red-500">Email is Required</span>}
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
                {...register('password', { required: true })}
              />
              {errors.password && <span className="text-red-500">Password is Required</span>}
              <button type="submit" className="btn btn-s btn-circle btn-block mt-4 shadow-md hover:scale-105 transition-transform">
                {isLoading ? <span className="loading loading-spinner text-blue-600"></span>:<FaSignInAlt />}
                Register
              </button>
              <div className="flex  text-center mt-4">
                <Link to="/" className="text-blue-500 hover:underline flex items-center justify-center gap-1 mr-10">
                  <span role="img" aria-label="home">🏡</span> Go to HomePage
                </Link>
                <Link to="/login" className="text-yellow-500 hover:underline flex items-center justify-center gap-1">
                  <span role="img" aria-label="home"></span> Have an Account? Login
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