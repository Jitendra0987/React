import { useEffect, useState } from "react";


const App=()=>{
const [cnt,setCnt]=useState(0)

   useEffect(()=>{
    setCnt(cnt+1)
   },[])

    return(
        <>
        
      <h1>wellcome to   {cnt}</h1>
      
        </>
    )
}
export default App;