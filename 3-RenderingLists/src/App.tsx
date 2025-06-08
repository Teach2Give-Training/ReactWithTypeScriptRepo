
// import './App.css'
import { Joke } from './components/Joke'
import jokesData from "./data/data.json"

function App() {
  // console.log(jokesData)
  return (
    <>

    {

    // jokesData && jokesData.map((joke)=>(
    //   <Joke joke={joke.joke} rating={joke.rating} key={joke.id} />
    // ))

    //filtering the jokes with rating > 3

    jokesData && jokesData.filter((joke)=> joke.rating < 3 ).map((joke)=>(
      <Joke key={joke.id} joke={joke.joke} rating={joke.rating} />
    ))



    }
     
    </>
  )
}

export default App
