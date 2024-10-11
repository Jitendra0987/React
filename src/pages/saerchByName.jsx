import axios from "axios";
import { useState } from "react";


const SearchByName=()=>{
    const [ename,setEname]=useState("");
    const [myData,setMyData]=useState([]);
    const handleChange=(e)=>{
        let empname=e.target.value;
        setEname(empname);
        let api=`http://localhost:3000/Employee`;
        axios.get(api).then((res)=>{
            setMyData(res.data);
            cconsole.log(res.data);
        })
    }
    const ans=myData.map((key)=>{
        let str=key.name;
        let mystatus=str.includes(ename);
        console.log(mystatus);
        if (mystatus)
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
        <h1>Search Employee REcords</h1>
        type emp name : <input type="text" value={ename} onChange={handleChange}/>

        <hr size="5" color="green" / >

        <table>
            <tr>
                <th>emp no</th>
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