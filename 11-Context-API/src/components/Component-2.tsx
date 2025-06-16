import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const Component2 = () => {
  const context = useContext(UserContext)

    if (!context) {
        return <div>No user context available.</div>
    }

    const { setUser } = context;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      age: { value: string };
    };
    if (!target.name.value || !target.email.value || !target.age.value) {
      alert('Please enter all the fields')
      return
    }
    const name = target.name.value
    const email = target.email.value
    const age = Number(target.age.value)
    const address = {
      street: 'Main st',
      city: 'Boston',
      state: 'MA'
    }
    const newUser = { name, email, age, address }
    setUser(newUser)

  }
  return (
    <div className="component-box">
      <h3>Component2</h3>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.1rem" }}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        <label htmlFor="age">Age</label>
        <input type="text" id="age" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
