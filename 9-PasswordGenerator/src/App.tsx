import { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(12)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [password, setPassword] = useState('')
  const passwordRef = useRef<HTMLInputElement>(null)

  const generatePassword = useCallback(() => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'
    let chars = letters
    if (includeNumbers) chars += numbers
    if (includeSymbols) chars += symbols

    let pwd = ''
    for (let i = 0; i < length; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return pwd
  }, [length, includeNumbers, includeSymbols])

  useEffect(() => {
    setPassword(generatePassword())
  }, [generatePassword])

  const handleCopy = () => {
    passwordRef.current?.select()
    document.execCommand('copy')
  }

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <div>
        <input
          ref={passwordRef}
          type="text"
          value={password}
          readOnly
          style={{ width: '300px', marginRight: '10px' }}
        />
        <button onClick={handleCopy}>Copy</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <label>
          Length:
          <input
            type="number"
            min={6}
            max={32}
            value={length}
            onChange={e => setLength(Number(e.target.value))}
            style={{ width: '50px', marginLeft: '10px' }}
          />
        </label>
        <label style={{ marginLeft: '20px' }}>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={e => setIncludeNumbers(e.target.checked)}
          />
          Include Numbers
        </label>
        <label style={{ marginLeft: '20px' }}>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={e => setIncludeSymbols(e.target.checked)}
          />
          Include Symbols
        </label>
      </div>
    </div>
  )
}

export default App