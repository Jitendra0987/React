import { BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AboutCompany from "./pages/AboutCompany";
import AboutProduct from "./pages/AboutProduct";
import Nopage from "./pages/Nopage";

const App=()=>{
  return(
    <>
     <BrowserRouter>
     <Routes>
      <Route  path="/" element={<Layout/>}>
      <Route path="home"  element={<Home/>}/>
      <Route path="about"  element={<About/>}>
      <Route path="aboutcompany"  element={<AboutCompany/>}/>
      <Route path="aboutproduct"  element={<AboutProduct/>}/>
      </Route>
      <Route path="contact"  element={<Contact/>}/>
      <Route path="*" element={<Nopage/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}
export default App;