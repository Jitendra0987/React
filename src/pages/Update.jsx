import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import edit from "../images/pen.png";
import del from  '../images/delet.jpg'



const Update=()=>{
const [mydata, setMyData]=useState([]);
const navigate=useNavigate();


const loadData=()=>{
    let api="http://localhost:3000/Employee";
    axios.get(api).then((res)=>{
        console.log(res.data)
        setMyData(res.data)

    })
}

useEffect(()=>{
     loadData();
},[])

    const myRecDel=(id)=>{
        let api=`http://localhost:3000/Employee/${id}`
        axios.delete(api).then((res)=>{
            message.error("your recourd succesfulley deleted !!!!")
            loadData()
        })
    }
    const myEdit=(id)=>{
        navigate(`/editrec/${id}`)
    }

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.empno}</td>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.contact}</td>
                <td>
                   
                   <a href="#" onClick={()=>{myEdit(key.id)}}>
                    <img src={edit} width="30px" height="30px" alt="" />
                   </a>
                   <a href="#" onClick={()=>{myRecDel(key.id)}}>
                    <img src={del} width="30px" height="30px" />
                   </a>

                </td>
            </tr>
            </>
        )
    })

    return(
        <>

        <h1>update employ record</h1>
        <table>
            <tr>
                <th>Emp no</th>
                <th>name</th>
                <th>Email</th>
                <th>contact</th>
            </tr>
            {ans}
        </table>


        </>
    )
}
export default Update;