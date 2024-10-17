import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import Display from "./pages/Display";
import Insert from "./pages/Insert";
import Search from "./pages/Search";
import SearchByName from "./pages/saerchByName";
import Update from "./pages/Update";
import Edit from "./pages/Edit";



const App=()=>{
    return(
        <>
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index   element={<Home></Home>}/>
            <Route path="home"  element={<Home></Home>}/>
            <Route path="display"  element={<Display/>}/>
            <Route path="insert"  element={<Insert/>}/>
            <Route path="search"  element={<Search/>}/>
            <Route path="searchbyname"  element={<SearchByName/>}/>
            <Route path="update"  element={<Update/>}/>
            <Route path="editrec/:myid"  element={<Edit/>}/>
            </Route>
         </Routes>
        </BrowserRouter>
        </>
    )
}
export default App;


