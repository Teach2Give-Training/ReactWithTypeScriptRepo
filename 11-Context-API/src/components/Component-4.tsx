import { useContext } from "react"
import { UserContext} from "../context/UserContext"

export const Component4 = () => {
  // const user =useUser()
 const context = useContext(UserContext)

    if (!context) {
        return <div>No user context available.</div>
    }

    const { user} = context

  return (
    <div className="component-box">
        <h4>Component-4</h4>
        <h3>Address</h3>
        <p>Street: {user?.address.street}</p>
        <p>State: {user?.address.state}</p>
        <p>City: {user?.address.city}</p>
    </div>
  )
}
