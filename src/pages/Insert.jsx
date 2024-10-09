import axios from "axios";
import { useState } from "react";
// import {massage}  from 'antd';



const Insert=()=>{
    const [input,setInput]=useState({});

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input);
    }

    const handleSubmit=()=>{
        let api="http://localhost:3000/data";
        axios.post(api,input).then((res)=>{
            console.log(res);
            alert("saved data")
        })
    }
    return(
        <>
        <h1>Insert Record</h1>
        Enter Employee No : <input type="text"  name="empno"  onChange={handleInput} /><br />
        Enter Employee No : <input type="text"  name="name"  onChange={handleInput} /><br />
        Enter Employee No : <input type="text"  name="email"  onChange={handleInput} /><br />
        Enter Employee No : <input type="text"  name="contact"  onChange={handleInput} /><br />
        <button onClick={handleSubmit}>save!!!</button>
        </>
    )
}
export default Insert;