import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const Component1 = () => {
  // const user = useUser()

  const context = useContext(UserContext)

  if (!context) {
    return <div>No user context available.</div>
  }

  const { user } = context



  return (
    <div className="component-box">
      <h3>Component-1</h3>
      <p><b>User Email:</b> {user?.email}</p>
    </div>

  )
}
