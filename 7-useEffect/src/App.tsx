import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((res) => res.json())
      .then((data) => {
        setJoke(`${data.setup} - ${data.punchline}`);
      });
  }, []); // Run once when component loads

  return (
    <div>
      <h2>😂 Random Joke</h2>
      <p>{joke || 'Loading joke...'}</p>
    </div>
    // <ProductSearch />
  );
}

export default App
