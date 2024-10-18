import { useState } from "react"
import Comp1 from "./Comp1"

const App=()=>{
    const [user, setUser]=useState("ayushi")
    return(
        <>
        <h1>propdril {user}</h1>
        <Comp1 user={user}/>

        </>
    )
}
export default App;