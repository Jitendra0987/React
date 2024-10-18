import { useContext } from "react";
import { userContext } from "./App";


const Bhopal=()=>{
    const {user, setUser}=useContext(userContext)
    return(
        <>
      <h1>wellcome to bhopal : : name : {user}</h1>
      <button onClick={()=>{setUser("nisha")}}>click</button>

        </>
    )
}
export default Bhopal;