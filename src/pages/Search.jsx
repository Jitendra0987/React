import axios from "axios";
import { useState } from "react";


const Search=()=>{

    const [eno,setEno]=useState("");
    const [mydata,setMydata]=useState([]);

    const handlesubmit=()=>{
        let upi=`http://localhost:3000/Employee\?empno=${eno}`
        axios.get(upi).then((res)=>{
            setMydata(res.data)
        })
    }
    const ans=mydata.map((e)=>{
        return(
            <>
            <h1>{e.empno}</h1>
            <h1>{e.name}</h1>
            <h1>{e.email}</h1>
            <h1>{e.contact}</h1>
            </>
        )
    })
    return(
        <>
        Enter empno :<input type="text" value={eno} onChange={(e)=>{setEno(e.target.value)}}/>
        <button onClick={handlesubmit}>search</button>
          {ans}
        </>
    )
}
export default Search;