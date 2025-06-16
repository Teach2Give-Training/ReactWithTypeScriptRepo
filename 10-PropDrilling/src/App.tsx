
import './App.css'
import { UserComponent } from './components/UserComponent'

interface User {
      name: string;
    email: string;
    age: number;
    address: {
        street: string;
        city: string;
        state: string;
    };
}


function App() {

  const user:User  = {
    name: 'John Doe',
    email: 'john@mail.com',
    age: 25,
    address: {
      street: 'Main st',
      city: 'Boston',
      state: 'MA'
    },
  }

  return (
    <>
     <UserComponent user={user}/>
    </>
  )
}

export default App
