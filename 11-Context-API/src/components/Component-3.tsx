import { useContext } from "react"
import { UserContext} from "../context/UserContext"
import { Component4 } from "./Component-4"


export const Component3 = () => {
 const context = useContext(UserContext)

    if (!context) {
        return <div>No user context available.</div>
    }

    const { user} = context

  // const user = useUser()
  return (
    <div className="component-box">
      <h3>Component 3</h3>
      <p>Age : {user?.age}</p>
      <Component4 />
    </div>
  )
}
