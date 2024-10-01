import { Link,Outlet } from "react-router-dom";

const About=()=>{
    return(
      <>
  <h1>about page</h1>
  <Link  to="aboutcompany">AboutCompany</Link>
  <Link  to="aboutproduct">AboutProduct</Link>
  <Outlet/>
      </>
    )
  }
  export default About;