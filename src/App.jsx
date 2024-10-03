import { useState } from "react";

const App=()=>{
  const [name, setName]=useState("najneen")
  
  const myName=()=>{
    setName("gouri")
  }
  return(
    <>
   <h1>wellcome to use status</h1>
   <h1>my name : {name}</h1>
   <button onClick={myName}>change name</button>
    </>
  )
}
export default App;