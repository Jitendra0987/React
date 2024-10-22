const student = [
  {
    rolleno: 121,
    name: "jitu",
    city: "betul",
  },
  {
    rolleno: 122,
    name: "ritu",
    city: "bhopal",
  },
  {
    rolleno: 124,
    name: "gitu",
    city: "indore",
  },
  {
    rolleno: 125,
    name: "nitu",
    city: "bhopal",
  },
];

const Faculty = () => {
  const data = student.map((student) => {
    return (
      <tr key={student.rolleno}>
        <td>{student.rolleno}</td>
        <td>{student.name}</td>
        <td>{student.city}</td>
      </tr>
    );
  });

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>ROLLNO</th>
            <th>NAME</th>
            <th>CITY</th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </>
  );
};

export default Faculty;
