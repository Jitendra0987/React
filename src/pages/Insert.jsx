import { message } from "antd";
import axios from "axios";
import { useState } from "react";


const Insert=()=>{
    const [input, setInput]=useState({});

    const handle=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput((values)=>({...values,[name]:value}))
        console.log(input)
    }
    const submit=()=>{
        let upi="http://localhost:3000/data";
        axios.post(upi,input).then((res)=>{
            message("data is save")
        })
    }
    return(
        <>
        Enter your id<input type="text" name="id" onChange={handle}/><br />
        Enter your rollno<input type="text" name="rollno" onChange={handle}/><br />
        Enter your name<input type="text" name="name" onChange={handle}/><br />
        Enter your contact<input type="text" name="contact" onChange={handle}/><br />
        <button onClick={submit}>save</button>
        </>
    )
}
export default Insert;