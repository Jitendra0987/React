import { createContext, useState } from "react";
import Cbrom from "./Cbrom";

const myCon=createContext();
const App=()=>{
const [user,Setuser]=useState("JITENDRA");

  return(
    <>
    <h1>{user}</h1>

    <myCon.Provider value={{user,Setuser}}>
     <Cbrom/>
    </myCon.Provider>
        
    </>
  )
}
export default App;
export {myCon};