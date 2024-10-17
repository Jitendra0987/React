import axios from "axios";
import { useEffect,useState } from "react";


const Display=()=>{
    const [mydata, setMydata]=useState([]);

   const loaddata=()=>{
    let api="http://localhost:3000/data";
    axios.get(api).then((res)=>{
        setMydata(res.data)
        console.log(res.data)
    })
   }

   useEffect(()=>{
    loaddata();
   },[])

   const amam=mydata.map((e)=>{
    return(
        <>
        <h2>{e.id}</h2>
        <h2>{e.rollno}</h2>
        <h2>{e.name}</h2>
        <h2>{e.contact}</h2>
        </>
    )
   })
    return(
        <>
        {amam}
        </>
    )
}
export default Display;