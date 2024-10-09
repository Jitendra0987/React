import { BrowserRouter, Route, Routes } from "react-router-dom";
import Display from "./pages/Display";
import Insert from "./pages/Insert";
import  Layout  from "./Layout";
import Home from "./pages/home";




const App=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index  element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="insert" element={<Insert/>}/>
            <Route path="display" element={<Display/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
        
        </>
    )
}
export default App;