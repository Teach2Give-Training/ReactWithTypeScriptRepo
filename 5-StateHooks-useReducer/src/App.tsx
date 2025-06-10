import { useReducer } from 'react'
import './App.css'



function App() {
  
  //1. Define the reducer function
  function counterReducer(state:number,action:{type:string}){
    switch(action.type){
      case 'increment':
      return  state + 1 
       case 'decrement':
      return  state - 1 
      case 'reset':
        return 0
      default:
        return state
    }
  }

  
  //2. userReducer returns [state,dispatch]
  const [count,dispatch] = useReducer(counterReducer,0)

  return (
    <>
    <div  style={{ textAlign: "center", marginTop: 40 }}>
      <h2>Counter with useReducer</h2>
      <p style={{ fontSize: 24 }}>Count: {count}</p>
       <button onClick={() => dispatch({ type: 'decrement' })} >Decrement -</button>
       <button onClick={() => dispatch({ type: 'increment' })} style={{ marginLeft: 8 }}>Increment +</button>
       <button onClick={() => dispatch({ type: 'reset' })} style={{ marginLeft: 8 }}>Reset</button>
    </div>
    </>
  )
}

export default App
