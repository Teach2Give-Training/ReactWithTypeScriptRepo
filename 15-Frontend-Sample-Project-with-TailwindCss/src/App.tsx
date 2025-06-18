import { createBrowserRouter, RouterProvider } from "react-router"
import { Contact } from "./pages/Contact"
import { Register } from "./pages/Register"
import { Home } from "./pages/Home"
import Error from "./pages/Error"
import "./App.css"
import { Login } from "./pages/Login"
import { About } from "./pages/About"
import Dashboard from "./pages/Dashboard"
import { UserProfile } from "./components/dashboard/UserProfile"
import { Orders } from "./components/dashboard/Orders"
import { MyPayments } from "./components/dashboard/MyPayments"
function App() {

  const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement:<Error/>,
  },
  {
    path: 'register',
    element: <Register />,
    errorElement:<Error/>,
  },
  {
    path: 'about',
    element: <About />,
    errorElement:<Error/>,
  },
  {
    path: 'login',
    element: <Login />,
    errorElement:<Error/>,
  },
  {
    path: 'contact',
    element: <Contact />,
    errorElement:<Error/>,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    errorElement:<Error/>,
    children: [
      {
        path: "me",
        element: <UserProfile />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "payments",
        element: <MyPayments />,
      },
      
    ]    
  },

])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
