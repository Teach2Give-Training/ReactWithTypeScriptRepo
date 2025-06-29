import { createBrowserRouter, RouterProvider } from "react-router"
import { Contact } from "./pages/Contact"
import { Register } from "./pages/Register"
import { Home } from "./pages/Home"
import Error from "./pages/Error"
import "./App.css"
import { Login } from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import  UserProfile  from "./components/dashboard/UserProfile"
import { Orders } from "./components/dashboard/Orders"
import { MyPayments } from "./components/dashboard/MyPayments"
import { Foods } from "./pages/Foods"
import ProtectedRoute from "./components/ProtectedRoute"
import AdminDashboard from "./pages/AdminDashboard"
import { AllMeals } from "./components/adminDashboard/AllMeals"
import { AllUsers } from "./components/adminDashboard/AllUsers"
import AdminUserProfile from "./components/adminDashboard/AdminUserProfile"
import { Analytics } from "./components/adminDashboard/Analytics"
import { AllOrders } from "./components/adminDashboard/AllOrders"
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
    path: 'foods',
    element: <Foods />,
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
    element: (
      <ProtectedRoute>
        <Dashboard/>
      </ProtectedRoute>
    ),
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
  {
      path: 'admindashboard',
      element: (
        <ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>
      ),
      errorElement: <Error />,
      children: [
        {
          path: "analytics",
          element: <Analytics />,
        },
        {
          path: "allorders",
          element: <AllOrders />,
        },
        {
          path: "allmeals",
          element: <AllMeals />,
        },
        {
          path: "allusers",
          element: <AllUsers />,
        },
        {
          path: "adminprofile",
          element: <AdminUserProfile />,
        },
      ]
    }

])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
