import { useParams } from "react-router-dom";


const Edit=()=>{
    const {myid} =useParams()
    return(
        <>
          <h1>Edit Employ record : {myid}</h1>
        </>
    )
}
export default Edit;