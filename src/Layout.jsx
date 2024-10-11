import { Outlet ,Link} from "react-router-dom";


const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link>
        <Link to="display">Display</Link>
        <Link to="insert">Insert</Link>
        <Link to="search">Search</Link>
        <Link to="searchbyname">SearchByName</Link>
        <hr / >
        <Outlet/>
        <hr />
        </>
    )
}
export default Layout;