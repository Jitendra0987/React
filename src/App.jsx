import { BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Faculty from "./Faculty";
import Contactus from "./Contactus";
import Ourcourse from "./Ourcourse";

const App=()=>{
  return(
    <>
     <BrowserRouter>
     <Routes>
      <Route  path="/" element={<Layout/>}>
      <Route path="home"  element={<Home/>}/>
      <Route path="about"  element={<About/>}/>
      <Route path="contact"  element={<Faculty/>}/>
      <Route path="ourcourse" element={<Ourcourse/>}/>
      <Route path="contactus" element={<Contactus/>}/>
       </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}
export default App;