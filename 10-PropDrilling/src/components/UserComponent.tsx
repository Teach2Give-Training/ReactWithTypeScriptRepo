
import { Component1 } from "./Component-1"
import { Component2 } from "./Component-2"
import { Component3 } from "./Component-3"

type User = {
    name: string;
    email: string;
    age: number;
    address: {
        street: string;
        city: string;
        state: string;
    };
};

export const UserComponent = ({ user }: { user: User }) => {
    return (
        <div>
            <h2>UserComponent</h2>
            <p>Some Text aabout User Component</p>
            {user && <p>{user.name}</p>}
            <Component1 email={user.email}/>
            <Component2/>
            <Component3 user={user}/>

        </div>
    )
}
