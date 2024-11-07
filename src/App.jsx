import { useSelector,useDispatch } from "react-redux";
import { colorChange } from "./bgcolorSlice";

const App=()=>{
    const myclr=useSelector((state)=>state.mycolor.bgclr);
    const dispatch=useDispatch();
    console.log(myclr);
    return(
        <>
        <h1>this is my counter program</h1>
        <button onClick={()=>{dispatch(colorChange())}}>click here</button>
        <div style={{width:"300px",height:"200px",backgroundColor:myclr}}>

        </div>

        </>
    )
}
export default App;