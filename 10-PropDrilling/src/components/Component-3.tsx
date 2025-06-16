import { Component4 } from "./Component-4"

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

export const Component3 = ({user}:{user:User}) => {
  return (
    <div>
      <h3>Component 3</h3>
      <p>{user.age}</p>
      <Component4 user={user}/>
    </div>
  )
}
