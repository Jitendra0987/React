  import { myCon } from "./App";
  import { useContext } from "react";

const Bhopal=()=>{
const {user,Setuser}=useContext(myCon);
    return(
        <>
             <h1>Welcome to bhopal : {user}</h1>
             <button onClick={()=>{Setuser("nisha")}}>Click</button>
        </>
    )
}
export default Bhopal;