
// import './App.css'
// import { MyFirstComponent, MyThirdComponent } from './components/MyFirstComponent'
// import MySecondComponent from './components/MySecondComponent'

import { Greetings } from "./components/Greetings"
import { HiBatman } from "./components/HiBatman"
import { Message } from "./components/Message"

function App() {

  const HiBatmanDetails ={
    greet:'Hi',
    who:'Batman'
  }
  const HiBatmanDetails2 ={
    greet:'Hello',
    who:'Batman2'
  }
    const HiBatmanDetails3 ={
    greet:'Hey',
    who:'Batman3'
  }

  return (

    // Render Component

    <>
      {/* <MyFirstComponent />
      <MySecondComponent />
      <MyThirdComponent /> */}

      {/* Props  */}
      <Greetings text="Some text"/>
      <Message greet="Welcome" who="Alien"/>
      <HiBatman greet={HiBatmanDetails.greet} who={HiBatmanDetails.who}  />
      <HiBatman {...HiBatmanDetails}/>
      <HiBatman {...HiBatmanDetails2}/>
      <HiBatman {...HiBatmanDetails3}/>
    </>

  )
}

export default App
