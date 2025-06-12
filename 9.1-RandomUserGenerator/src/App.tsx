import { useState, useEffect} from 'react'
import './App.css'

type User = {
  name: { first: string; last: string }
  email: string
  picture: { large: string }
}

function App() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchUser = async () => {
    setLoading(true)
    const res = await fetch('https://randomuser.me/api/')
    const data = await res.json()
    setUser(data.results[0])
    setLoading(false)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div className="container">
      <h1>Random User Generator</h1>
      <button  onClick={fetchUser} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch New User'}
      </button>
      {user && (
        <div style={{ marginTop: 20 }}>
          <img src={user.picture.large} alt="User" style={{ borderRadius: '50%' }} />
          <h2>
            {user.name.first} {user.name.last}
          </h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  )
}

export default App