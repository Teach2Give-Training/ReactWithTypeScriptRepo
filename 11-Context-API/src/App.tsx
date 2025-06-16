import { useState } from 'react'
import './App.css'
import { UserComponent } from './components/UserComponent'
import { UserContext, type User } from './context/UserContext'

function App() {

  //   const userDetails  = {
  //   name: 'John Doe',
  //   email: 'john@mail.com',
  //   age: 25,
  //   address: {
  //     street: 'Main st',
  //     city: 'Boston',
  //     state: 'MA'
  //   },
  // }

  const [user, setUser] = useState<User>({
    name: 'John Doe',
    email: 'john@mail.com',
    age: 25,
    address: {
      street: 'Main st',
      city: 'Boston',
      state: 'MA'
    },
  })

  return (
    <>
      {/* <UserContext.Provider value={userDetails}>
      <h3>useContext to Avoid Prop Drilling</h3>
      <UserComponent/>
    </UserContext.Provider> */}

      <UserContext.Provider value={{ user, setUser }}>
        <div className="container">
          <h3  style={{ textAlign: "center" }}>useContext to Avoid Prop Drilling</h3>
          <UserComponent />
        </div>
      </UserContext.Provider>
    </>
  )
}

export default App
