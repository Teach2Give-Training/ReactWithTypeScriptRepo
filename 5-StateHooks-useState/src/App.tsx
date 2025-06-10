
import './App.css'
import { useState } from 'react'

interface Fruits {
  id: number;
  name: string;
  color: string;
}


function App() {
  const [value, setValue] = useState<number>(0)
  const [name, setName] = useState<string>("")
  const [count, setCount] = useState<number>(0)
  const [show, setShow] = useState<boolean>(true)

  const [fruits, setFruits] = useState<Fruits[]>([
    { id: 1, name: "Apple", color: "Red" },
    { id: 2, name: "Banana", color: "Yellow" }
  ])

  const [fruitName, setFruitName] = useState<string>("");
  const [fruitColor, setFruitColor] = useState<string>("");


  const removeFruit = (id: number) => {
    setFruits(fruits.filter(fruit => fruit.id !== id));
  }

  const addFruit =()=>{
    if(fruitName && fruitColor){
      setFruits([
        ...fruits,
        {id:Date.now(),name:fruitName,color:fruitColor}
      ]);
      setFruitName("");
      setFruitColor("");
    }
  }

  return (
    <>
      {/* <button onClick={() => setValue((value) => value + 1)}>
          count is {value}
        </button> */}

      {/* <h2>Welcome {name ? `, ${name}` : ""}!</h2>

      <input type="text"
        placeholder='Enter your Name'
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ marginBottom: 12, padding: 10 }}
      />

      <br />
      <button onClick={() => setCount(count + 1)}>
        Increment: {count}
      </button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: 8 }}>
        Decrement
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: 8 }}>
        Reset
      </button>
      <br /><br />

      <button onClick={()=> setShow(!show)}>
        {show ? "Hide" :"Show"} Counter
      </button>

      {
        show &&(
           <div style={{ marginTop: 16, fontWeight: "bold" }}>
          Current Count: {count}
        </div>
        )
      } */}
      <div style={{ maxWidth: 400, margin: "auto" }}>
        <h2>Favorite Fruits</h2>
        <ul>
          {
            fruits.map(fruit => (
              <li key={fruit.id} style={{ marginBottom: 8 }}>
                <span style={{ color: fruit.color.toLowerCase() }}>
                  {fruit.name} ({fruit.color})
                </span>
                <button
                  onClick={() => removeFruit(fruit.id)}
                  style={{ marginLeft: 12 }}
                >
                  Remove
                </button>
              </li>
            ))
          }
        </ul>
        <input
          type="text"
          placeholder="Fruit name"
          value={fruitName}
          onChange={e => setFruitName(e.target.value)}
          style={{ marginRight: 8, padding: 6 }}
        />
        <input
          type="text"
          placeholder="Color"
          value={fruitColor}
          onChange={e => setFruitColor(e.target.value)}
          style={{ marginRight: 8, padding: 6 }}
        />
       <button onClick={addFruit}>Add Fruit</button>
      </div>

    </>
  )
}

export default App
