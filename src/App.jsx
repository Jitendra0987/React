import { useState } from "react";



const App=()=>{

  const [input,setInput]=useState({})

  const handleInput=(e)=>{
     let name=e.target.name;
     let value=e.target.value;


     setInput((values)=>({...values, [name]:value}));
  console.log(input);

  }
  const handleSubmit=()=>{
    console.log(input);
  }

  
  return(
    <>
    <h1>Application from</h1>
    Enter name: <input type="text" name="stunnm" value={input.stunm} onChange={handleInput}/>
    <br />
    Enter city : <input type="text" name="city"  value={input.city}  onChange={handleInput}/>
    <br />
    Enter contact :<input type="text" name="contact" value={input.contact} onChange={handleInput}/>
    <br />
    Enter email : <input type="text" name="email" value={input.email} onChange={handleInput}/>
     <br />
     <button onClick={handleSubmit}>click here</button>
    </>
  )
}
export default App;