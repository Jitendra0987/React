const App=()=>{
  const naam=["ranju","manju","ganju","ranju"]

  const colec=naam.map((idea)=>{
    return(
      <>
         <h1>{idea}</h1>
      </>
    )
  })
  return(
    <>
      {colec}
    </>
  )
}
export default App;