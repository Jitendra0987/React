import { useContext } from "react";
import {mycontext}  from "./App";



const Comp5=()=>{
    const {user}=useContext(mycontext)
    return(
        <>
        <h1>component=5 {user}</h1>
        

        </>
    )
}
export default Comp5;