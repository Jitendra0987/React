import { message } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Update=()=>{
const[myData, setMyData]=useState([]);
const navigate =useNavigate();

    const loaddata=()=>{
        let api="http://localhost:3000/Employee";
        axios.get(api).then((res)=>{
            console.log(res.data)
            setMyData(res.data)
        })
    }

    useEffect(()=>{
        loaddata()
    },[])

    const myRecDel=(id)=>{
        let api=`http://localhost:3000/Employee/${id}`
        axios.delete(api).then((res)=>{
                 message.success("your data sucsessfulley deleted");
                 loaddata()

        })
    }

    const myEdit=(id)=>{
        navigate(`/editrec/${id}`)
    }

    const  ans=myData.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.empno}</td>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.contact}</td>
                <button onClick={()=>{myEdit(key.id)}} >Edit</button>
                <button onClick={()=>{myRecDel(key.id)}}>Delete</button>
            </tr>
            
            </>
        )

    })

    return(
        <>
        <h1>updata your data</h1>
     <table>
        <tr>
           <th>empl name</th>
           <th> name</th>
           <th> email</th>
           <th> contact </th>
        </tr>
        {ans}

     </table>
           
        </>
    )
}
export default Update;