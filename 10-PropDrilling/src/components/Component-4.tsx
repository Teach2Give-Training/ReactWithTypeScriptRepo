
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
export const Component4 = ({user}:{user:User}) => {
  return (
    <div>
        <h4>Component-4</h4>
        <h3>Address</h3>
        <p>Street: {user.address.street}</p>
        <p>State: {user.address.state}</p>
        <p>City: {user.address.city}</p>
    </div>
  )
}
