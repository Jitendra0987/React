import axios from "axios";
import { useEffect, useState } from "react";


const App=()=>{
    const[mydata,setdata]=useState([]);
    const loaddata=()=>{
        let api="http://localhost:3000/data";
        axios.get(api).then((res)=>{
           setdata(res.data);
           console.log(res.data);
        })
    }
    useEffect(()=>{
      loaddata();
         
    },[])
     const ans=mydata.map((key)=>{
        <tr>
        <td>{key.rollno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
        </tr>
     })
    return(
        <>
       <h1>welcome to cybrom student</h1>
       <table>
        <tr>
            <th>ROLLNO</th>
            <th>NAME</th>
            <th>CITY</th>
            <th>FEES</th>
        </tr>
       </table>
        </>
    )
}
export default App;