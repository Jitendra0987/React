const sss=["raju","maju","sanju","mohan"]
const App=()=>{
  const aaa = sss.map((key)=>{
    return(
      <h1>{key}</h1>
    )
  })
  return(
  <>
    {sss}
   </>
  )}
export default App;