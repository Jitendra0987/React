import { useState } from "react";

const App=()=>{
  const [name,setName]=useState("");
  const [city,setCity]=useState("");
  const handle=()=>{
    console.log({stuname:name, stucity:city})
  }
  return(
    <>
     <h1> Application from </h1>
     Enter name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
     <br /><br />
     Enter city : <input type="text"  value={city} onChange={(e)=>{setCity(e.target.value)}}/>
     <br /><br />
     <button onClick={handle}>click</button>
    </>
  )
}
export default App;