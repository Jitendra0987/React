const student =[
  {
    "rolleno":121,
    "name":"jitu",
    "city":"betul"
  },

  {
    "rolleno":122,
    "name":"ritu",
    "city":"bhopal"
  },

  {
    "rolleno":124,
    "name":"gitu",
    "city":"indore"
  },

  {
    "rolleno":125,
    "name":"nitu",
    "city":"bhopal"
  }
]
const data=student.map((key)=>{
  return(
    <>
    <tr>
      <td>{key.rolleno}</td>
      <td>{key.name}</td>
      <td>{key.city}</td>
    </tr>
    
    </>
  )
})


const App=()=>{
  return(
    <>
    <table>
    <th>ROLLNO</th>
    <th>NAME</th>
    <th>CITY</th>
    {data}
    </table>
    </>
  )
}
export default App;
