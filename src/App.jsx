import { useState,useEffect } from "react";
const App=()=>{
  
    const [cnt, setCnt]=useState(0)

    useEffect(()=>{
        
        setTimeout(()=>{
            setCnt(cnt+1)
        },2000);
    })
    return(
        <>
        <h1>wellcome to {cnt}</h1>
        </>
    )
}
export default App;