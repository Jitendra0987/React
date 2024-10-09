import { Outlet ,Link} from "react-router-dom";


const Layout=()=>{
    return(
        <>
        <Link to="home" >Home</Link> 
        <Link to="insert" >Insert Data</Link> 
        <Link to="display">Display data</Link>
        <hr size="4" color="red"/>
        <Outlet/>
        <hr size="4" color="red"/>
        </>
    )
}
export default Layout;