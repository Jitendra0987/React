
import { useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import { colorChange } from "./bgcolorSlice";

const App=()=>{
  const [color,setcolor]=useState("")
  const bgclr=useSelector((state)=>state.mycolor.bgcolor);
  const dispatch=useDispatch();
  return(
    <>

<h1> bg color change program</h1>

Enter color : <input type="text " value={color} onChange={(e)=>{setcolor(e.target.value)}}/>
<button onClick={()=>{dispatch(colorChange(color))}}>click</button> <br /><br />
<div style={{width:"300px",height:"200px",border:"1px solid black",backgroundColor:bgclr}}>

</div>
    </>
  )
}
export default App;