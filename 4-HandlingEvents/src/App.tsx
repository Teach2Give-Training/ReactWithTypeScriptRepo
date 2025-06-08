
// import './App.css'

import { useState } from "react";

function App() {

  const [hovered, setHovered] = useState(false);
  const [dblClickMsg, setDblClickMsg] = useState("");

  const handleClick = () => {
    console.log("Hello")
  }

  const handleClickWithMsg = (msg: string) => {
    console.log(msg)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const fname = (form.elements.namedItem('fname') as HTMLInputElement)?.value;
    const lname = (form.elements.namedItem('lname') as HTMLInputElement)?.value;

    if (fname == "" || lname == "") {
      alert("All field are required")
    }

    console.log(`hello my fname is  ${fname}`)
    console.log(`hello my lname is  ${lname}`)

  }

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    // console.log(e)
    const target = e.target as HTMLDivElement;
    console.log("Scroll Top", target.scrollTop)
    console.log("Scroll Top", target.scrollLeft)
  }

  return (
    <>

      <h1>Handle Events</h1>
      {
        // <button type='button' onClick={handleClick}>Hello</button>

        //   <button type="button"
        //   onClick={() => handleClickWithMsg("This is a funny msg")}>
        //   Hello WIth Msg
        // </button>

        // <form onSubmit={handleSubmit}>
        //   <input required type="text" id="fname" placeholder='Enter first name' style={{ padding: "10px" }} />

        //   <input required type="text" id="lname" placeholder='Enter last name' style={{ padding: "10px", marginLeft: "5px" }} />
        //   <button type="submit">Submit</button>
        // </form>

        //   <div onScroll={handleScroll}
        //   style={
        //     {
        //       border: '1px solid black', height: '300px',
        //       padding: '20px', overflow: 'scroll'
        //     }} >
        //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui debitis repellendus laborum sed provident minus sunt veritatis repellat optio! Aliquid et placeat illum vel perferendis fugiat deleniti optio qui dolorem.
        //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis dignissimos exercitationem facere qui nobis voluptatibus voluptate quo quos optio minus itaque reprehenderit nostrum dolorem cumque, dolores ex ullam pariatur.
        //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempora, iste ea assumenda unde dolore tenetur reiciendis voluptas facere, maxime soluta accusantium et illum cupiditate esse distinctio enim asperiores sit?
        //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempora, iste ea assumenda unde dolore tenetur reiciendis voluptas facere, maxime soluta accusantium et illum cupiditate esse distinctio enim asperiores sit?
        //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempora, iste ea assumenda unde dolore tenetur reiciendis voluptas facere, maxime soluta accusantium et illum cupiditate esse distinctio enim asperiores sit?
        //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempora, iste ea assumenda unde dolore tenetur reiciendis voluptas facere, maxime soluta accusantium et illum cupiditate esse distinctio enim asperiores sit?
        //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempora, iste ea assumenda unde dolore tenetur reiciendis voluptas facere, maxime soluta accusantium et illum cupiditate esse distinctio enim asperiores sit?
        //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempora, iste ea assumenda unde dolore tenetur reiciendis voluptas facere, maxime soluta accusantium et illum cupiditate esse distinctio enim asperiores sit?
        //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempora, iste ea assumenda unde dolore tenetur reiciendis voluptas facere, maxime soluta accusantium et illum cupiditate esse distinctio enim asperiores sit?
        //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempora, iste ea assumenda unde dolore tenetur reiciendis voluptas facere, maxime soluta accusantium et illum cupiditate esse distinctio enim asperiores sit?
        //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempora, iste ea assumenda unde dolore tenetur reiciendis voluptas facere, maxime soluta accusantium et illum cupiditate esse distinctio enim asperiores sit?
        //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempora, iste ea assumenda unde dolore tenetur reiciendis voluptas facere, maxime soluta accusantium et illum cupiditate esse distinctio enim asperiores sit?
        // </div>


        <div
          style={{
            width: 200,
            height: 100,
            background: hovered ? "#ffe066" : "#eee",
            border: "2px solid #333",
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.2s"
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onDoubleClick={() => setDblClickMsg("You double-clicked the box!")}
        >
          {hovered ? "Hovering!" : "Hover over me"}
        </div>


      }

      {dblClickMsg && <p style={{ color: "green" }}>{dblClickMsg}</p>}
    </>
  )
}

export default App
