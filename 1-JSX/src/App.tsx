
// import './App.css'

interface Details{
  age:number,
  height:number
}

function App() {

  const myName:string = "Denis Wachira";

  const moreDetails:Details = {
    age:30,
    height: 5.4
  }

  const programmingLanguages:string[] = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Go",
  "Rust"
];

  return (
    <>
      <h3>Hello world my name {myName}</h3>
      <p>My age is {moreDetails.age}</p>
      <p>My height is  {moreDetails.height}</p>

      <h4>My favourite Programming Languages</h4>
      {/* <ul>
        <li>TypeScript</li>
        <li>C#</li>
        <li>Python</li>
      </ul> */}
  <ul style={{backgroundColor:"green", color:"pink",listStyle:"none"}}>
    {
      programmingLanguages.map(lang =>(
        <li key={lang}>{lang}</li>
      ))
    }
  </ul>

    </>
  )
}

export default App
