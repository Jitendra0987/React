import React, { useState } from 'react';
import axios from 'axios';

const Ourcourse= () => {
  const [student, setStudent] = useState({
    empno: '',
    name: '',
    city: '',
    salary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/Employ', student);
      alert('Student record added successfully!');
      setStudent({ empno: '', name: '', city: '', salary: '' });
    } catch (error) {
      console.error('There was an error adding the student!', error);
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Empno:</label>
          <input
            type="text"
            name="empno"
            value={student.empno}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={student.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            value={student.salary}
            onChange={handleChange}
            required
          />
        </div>
        <button onClick={handleSubmit}>Savveeeee!</button>
      </form>
    </div>
  );
};

export default Ourcourse;