import { useEffect, useState } from "react";


const App=()=>{
const [cnt,setCnt]=useState(0);
const [multi,SetMulti]=useState(0);

    useEffect(()=>{
        SetMulti(cnt*2)
    },[cnt])

    return(
        <>
        
            <h1>my count : {cnt}</h1>
            <h2>multiplication : {multi}</h2>
            <button onClick={()=>{setCnt(cnt+1)}}>click</button>
  
        </>
    )
}
export default App;