import {  createBrowserRouter,  RouterProvider,} from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about-us",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
