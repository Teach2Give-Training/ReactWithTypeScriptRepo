import { useRef, useState } from 'react'
import './App.css'

function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  const changeCount = useRef(0)
  const [value, setValue] = useState('')

  const handleFocus = () => {
    inputRef.current?.focus()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    changeCount.current += 1
  }

  return (
    <>
      <h1>useRef Hook</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleFocus}>Focus Input</button>
      <p>Input changed <b>{changeCount.current}</b> times</p>
    </>
  )
}

export default App