import {Link,Outlet} from "react-router-dom";

const Layout=()=>{
  return(
    <>
    <Link to="home">Home</Link>
    <Link to="about">About</Link>
    <Link to="faculty">Faculty</Link>
    <Link to="ourcourse">Ourcourse</Link>
    <Link to="contactus">Contactus</Link>
    <Outlet/>
    www.mypage.com
    </>
  )
}
export default Layout;