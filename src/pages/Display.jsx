import axios from "axios";
import { useEffect, useState } from "react";



const Display=()=>{
    const[empdata,setEmpdata]=useState([]);

      const loadData=()=>{
        let url="http://localhost:3000/data";
        axios.get(url).then((respo)=>{
            console.log(respo.data)
            setEmpdata(respo.data);
        })

      }

      useEffect(()=>{
        loadData();

      },[])

      const ans=empdata.map((e)=>{
        return(
            <>
            <tr>
                <td>{e.id}</td>
                <td>{e.rollno}</td>
                <td>{e.name}</td>
                <td>{e.contact}</td>
            </tr>
            </>
        )
      })

    return(
        <>
        <h1>Display page</h1>

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
export default Display;