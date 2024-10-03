import { useState } from "react";

const App=()=>{
  const [color,setColor]=useState("red")

  return(
    <>
    <h1 style={{backgroundColor:color}}>set color: {color}</h1>
    <button onClick={()=>{setColor("green")}}>green</button>
    <button onClick={()=>{setColor("yellow")}}>yellow</button>
    <button onClick={()=>{setColor("black")}}>black</button>
    <button onClick={()=>{setColor("blue")}}>blue</button>
    </>
  )
}
export default App;