import { useEffect, useState } from "react";
import axios from "axios";


const App=()=>{
    const[mydata,setData]=useState([]);

    const loaddata=async()=>{
        let api="http://localhost:3000/data"
         const response=await  axios.get(api);
         setData(response.data)
         console.log(response)
    }

    useEffect(()=>{
        loaddata();
    },[])

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.id}</td>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.contact}</td>
            </tr>
            </>
        )
    })

    return(
        <>
           <table>
            <tr>
                <th>id</th>
                <th>rollno</th>
                <th>name</th>
                <th>contact</th>
            </tr>
            {ans}
           </table>
        </>
    )
}
export default App;
