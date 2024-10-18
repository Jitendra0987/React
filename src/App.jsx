import { createContext ,useState} from "react";
import Comp1 from "./comp1"


const mycontext=createContext();



const App=()=>{
  const [user,setUser]=useState("jitendra")
  return(
    <>
    <h1>wellcome : {user}</h1>
    <mycontext.Provider value={{user}}>
        <Comp1/>
    </mycontext.Provider>
    </>
  )
}
export default App;
export{mycontext}