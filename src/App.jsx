import { useDispatch, useSelector } from "react-redux";
import { colorChange } from "./colorSlice";


const App=()=>{
    const myclr = useSelector((state)=>state.mycolor.color)
    const disptach = useDispatch();

    return(
        <>
            <h1> My color change program</h1>
            <button onClick={()=>{disptach(colorChange())}}>click here</button>
            <br /><br />
            <div style={{width:"300px", height:"200px", backgroundColor:myclr}}>

            </div>
        </>
    )
}
export default App;










