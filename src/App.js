import './App.css';
import { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import Students from './Students.js';
function App() {
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('https://api.hatchways.io/assessment/students')
      .then(response => response.json())
      .then(data => setStudents(data.students));
  }, []);
  const [students, setStudents] = useState([]);
  students.forEach((student) => {
    const studentObj = {
      pic: student.pic,
      firstName: student.firstName.toLowerCase(),
      lastName: student.lastName.toLowerCase(),
      name: `${student.firstName} ${student.lastName}`,
      email: student.email,
      company: student.company,
      skill: student.skill,
      grades: student.grades,
      id: student.id,
      tags: []
    }
    studentArray.push(studentObj)
  })

  setStudents(students)

  setTags = (id, tags) => {
    this.state.students[id - 1].tags = tags;
    setStudents(students)
  }
  return (
    <div className="App">
      <form action="" className="searchForm">
        <input type="text" placeholder="Search by name" onChange={this.handleNameChange} />
        <input type="text" placeholder="Search by tag" onChange={this.handleTagChange} />
      </form>
      <div>
        {this.state.studentArray.map((student) => {
          return (
            <Student key={student.key} student={student} />
          )
        })}
      </div>
    </div>

  );
}

export default App;
