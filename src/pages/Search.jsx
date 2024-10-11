import axios from "axios";
import { useState } from "react";

const Search=()=>{
    const [eno,setEno]=useState("");
    const [mydata, setMydata]=useState([])

    const handleSubmit=()=>{
        let api=`http://localhost:3000/Employee/?empno=${eno}`
        axios.get(api).then((res)=>{
            setMydata(res.data)
            console.log(res.data)
        })
    }

const ans=mydata.map((key)=>{
    return(
        <>
        <h1>Employee numbe :{key.empno}</h1>
        <h1>name : {key.name}</h1>
        <h1>Email : {key.email} </h1>
        <h1>contact no : {key.contact}</h1>
        </>
    )
})

    return(
        <>
        <h1>Search Employee Records</h1>
        Enter Emp No : <input type="text" value={eno} onChange={(e)=>{setEno(e.target.value)}}/>
        <button onClick={handleSubmit}>search</button>
           <hr  size="5"  color="red" />
           {ans}
        </>
    )
}
export default Search;