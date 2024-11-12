import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, completeTask, uncompleteTask, EditTaskData} from "./todoSlice";

const App=()=>{ 
  const [mywork, setMyWork]=useState("");
  const [btnStatus, setBtnStatus]= useState(true); 
  const [myid, setMyid]=useState("");
  const dispatch= useDispatch(); 
  const workData= useSelector((state)=>state.todo.task) ;
  console.log(workData);
  
   const handleSubmit=()=>{
      dispatch(addTask({id:Date.now(), work:mywork, status:false}))
   }

   const deleteWork=(id)=>{
         dispatch(deleteTask(id))
   }

   const completeWork=(id)=>{
        dispatch(completeTask(id))
   }

   const uncompleteWork=(id)=>{
    dispatch(uncompleteTask(id))
}


const editData=(id, wrk)=>{
     setMyWork(wrk)
     setBtnStatus(false);
     setMyid(id)
}

const editDataSave=()=>{
  dispatch(EditTaskData({myid, mywork})) 
  setMyWork("");
  setBtnStatus(true);
}

  let sno=0;
   const ans=workData.map((key)=>{
    sno++;
    return(
      <>
        <tr>
          <td> {sno} </td>
          <td> 
            
            {key.status? 
            <span style={{color:'red', textDecoration:'line-through'}} > 
            {key.work}
            </span>    : 
            <span style={{color:'black', textDecoration:'none'}} > 
            {key.work}
            </span>  }

            
            
            </td>
          <td> 

             <button onClick={()=>{deleteWork(key.id)}}>Delete</button>

          </td>
          <td>
               <button onClick={()=>{completeWork(key.id)}}> Complete</button>

          </td>
          <td>
               <button onClick={()=>{uncompleteWork(key.id)}}> UnComplete</button>

          </td>
          <td>

              <button onClick={()=>{editData(key.id, key.work)}}> Edit</button>
          </td>
        </tr>
      
      </>
    )
   })
  return(
    <>
      <h1> To Do App </h1>
      <hr size="1" color="blue"/>
      Enter your Task : <input type="text" value={mywork} onChange={(e)=>{setMyWork(e.target.value)}} />
     
     {btnStatus?  
      <button onClick={handleSubmit}>Add</button> : 
      <button onClick={editDataSave}> EditSave</button>  }
     

     

      <table border="1">
        <tr>
          <th> S.No.</th>
          <th> Work</th>
          <th> </th>
          <th> </th>
        </tr>
        {ans}
      </table>
     
    </>
   )
}
export default App;