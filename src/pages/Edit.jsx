import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



const Edit =()=>{
  const {myid}=useParams();
  const [mydata, setMydata]=useState({});

const loaddata=()=>{
  let api=`http://localhost:3000/Employee/${myid}`;
  axios.get(api).then((res)=>{
    console.log(res.data);
    setMydata(res.data)
  })
}

useEffect(()=>{
     loaddata()
},[])


   const handleInput=(e)=>{
    let name=e.target.name;
    let value= e.target.value;
    setMydata(values=>({...values,[name]:value}))
   }    

   const handlesubmit=()=>{
    let api=`http://localhost:3000/Employee/${myid}`;
    axios.put(api,mydata).then((res)=>{
      alert("data updated")

      setMydata({
        empno : "",
        name : "",
        email : "",
        contact : ""
      })
    })

   }


  return(
    <>
    <h1>Edit Employee Recordes</h1>

    Edit Employe no : <input type="text" name="empno" value={mydata.empno} onChange={handleInput}  /><br />
    Edit Employe no : <input type="text" name="name" value={mydata.name} onChange={handleInput}  /><br />
    Edit Employe no : <input type="text" name="email" value={mydata.email} onChange={handleInput}  /><br />
    Edit Employe no : <input type="text" name="contact"  value={mydata.contact} onChange={handleInput}  /><br />
   <button onClick={handlesubmit}>submit</button>
    </>
  )
}
export default Edit;