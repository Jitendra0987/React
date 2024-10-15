import axios from "axios";
import { useState } from "react";


const SearchByName=()=>{
     const[ename,setEname]=useState("");
     const[mydata,setMyData]=useState([]);

     const handlesubmit=(e)=>{
        let empl=e.target.value;
        setEname(empl)
        let api=(`http://localhost:3000/Employee`)
        axios.get(api).then((res)=>{
            setMyData(res.data)
        })

     }

     const ans=mydata.map((key)=>{
        let str=key.name;
        let mystatus=str.includes(ename)
        if(mystatus)
        {
            return(
                <>
                <tr>
                    <td>{key.empno}</td>
                    <td>{key.name}</td>
                    <td>{key.email}</td>
                    <td>{key.contact}</td>
                </tr>
    
                </>
            )
        }
       
     })


    return(
        <>
        Entar name : <input type="text"  value={ename}  onChange={handlesubmit}/>   
        
        <table>
            <tr>
                <th>ename</th>
                <th>name</th>
                <th>email</th>
                <th>contact</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default SearchByName;