
const subject=["php","python","java","orecal"];
const App=()=>{
const student=subject.map((key)=> <li>{key}</li>)

return(
  <>
<ol>{student}</ol>
  </>
)}
export default App;