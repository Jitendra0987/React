import { useState } from "react";

const App=()=>{
const [cnt, setCnt]=useState(0);
const myDcrement =()=>{

    if(cnt<=1)
    {
        alert("No decrese minus value")
    }

    else
    {
        setCnt(cnt-1)
    }
}

    return(
        <>
        <center>
       <h1>counter App</h1>
       <h1>count : {cnt}</h1>
       <button onClick={()=>{setCnt(cnt+1)}}>increment</button>
       <button onClick={myDcrement}>Decrement</button>
       <button onClick={()=>{setCnt(0)}}>Reset</button>
       </center>
        </>
    )
}
export default App;