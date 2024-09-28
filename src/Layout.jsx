import { Link, Outlet } from "react-router-dom";

const Layout=()=>{
    return(
      <>
    <Link to="home">Home</Link>
    <Link to="about">About</Link>
    <Link to="contact">Contact</Link>
    <hr size="4" color="blue1"/>

    <Outlet/>

    <hr size="4" color="blue1"/>
       www.mycompany.com

      </>
    )
  }
  export default Layout;