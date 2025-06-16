
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Component1 } from "./Component-1"
import { Component2 } from "./Component-2"
import { Component3 } from "./Component-3"



export const UserComponent = () => {
    // const userDetails = useUser();
    const context = useContext(UserContext)

     if (!context) {
        return <div>No user context available.</div>
    }

    const {user} = context

    return (
        <div className="component-box">
            <h2>UserComponent</h2>
            <p>Some Text about User Component</p>
            {user && <p>{user.name}</p>}
            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <Component1 />
                <Component2 />
                <Component3 />
            </div>

        </div>
    )
}
