REACT-ROUTING(App.jsx)


import { BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nopage from "./pages/Nopage";

const App=()=>{
  return(
    <>
     <BrowserRouter>
     <Routes>
      <Route  path="/" element={<Layout/>}>
      <Route path="home"  element={<Home/>}/>
      <Route path="about"  element={<About/>}/>
      <Route path="contact"  element={<Contact/>}/>
      <Route path="*" element={<Nopage/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}
export default App;





                            Layout page [Outlet] 

import {Link,Outlet} from "react-router-dom";

const Layout=()=>{
  return(
    <>
    <Link to="home">Home</Link>
    <Link to="about">About</Link>
    <Link to="contact">Contact</Link>
    <Outlet/>
    www.mypage.com
    </>
  )
}
export default Layout;











                            [ ROUTING WITH NESTING] 

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutCompany from "./pages/AboutCompany";
import AboutProduct from "./pages/AboutProduct";
import Contact from "./pages/Contact";
import Layout from "./Layout";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="home" element={<Home/>}/>
      <Route path="about" element={<About/>}>
      <Route path="aboutcompany" element={<AboutCompany/>}/>
      <Route path="aboutproduct" element={<AboutProduct/>}/>
      </Route>
      <Route path="contact"   element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;



import {Link,Outlet} from "react-router-dom"

const Layout=()=>{
  return(
    <>
    <Link to="home">Home</Link>
    <Link to="about">About</Link>
    <Link to="contact">Contact</Link>
    <Outlet/>
    www.www.www
    </>
  )
}
export default Layout;














import {Link,Outlet} from "react-router-dom"

const About=()=>{
  return(
    <>
    <h1>home page</h1>
      <Link to="aboutproduct">Aboutproduct</Link>
      <Link to="aboutcompany">AboutCompany</Link>
      <Outlet/>
    </>
  )
}
export default About;










