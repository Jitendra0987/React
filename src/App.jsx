
import { useState } from "react";

const App=()=>{
  const [city,setCity]=useState()
  const myCity=()=>{
    setCity("indore")
  }
  return(
    <>
    <h1>my city: {city}</h1>
    <button onClick={myCity}>click here</button>
    <button onClick={()=>{setCity("goa")}}>click</button>
    </>
  )
}
export default App;