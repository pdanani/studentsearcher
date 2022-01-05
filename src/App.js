import React, { Component } from 'react';
import './App.css';
import Student from './Student.js'
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = ({

    })
  }


  componentDidMount = () => {
    axios({
      method: "GET",
      url: "https://www.hatchways.io/api/assessment/students",
    }).then((res) => {
      const students = res.data.students;
      this.studentData(students);
    })
  }

  studentData = (students) => {
    let studentList = []
    students.forEach((student) => {
      const stu = {
        pic: student.pic,
        firstName: student.firstName.toLowerCase(),
        lastName: student.lastName.toLowerCase(),
        name: `${student.firstName} ${student.lastName}`,
        company: student.company,
        email: student.email,
        skill: student.skill,
        grades: student.grades,
        key: student.id,
        tags: []
      }
      studentList.push(stu)
    })

    this.setState({
      students: studentList,
      filteredList: studentList
    })
  }

  setTags = (id, tags) => {
    const students = this.state.students
    students[id - 1].tags = tags;
    this.setState({
      students
    })
  }

  handleNameChange = (e) => {
    const search = e.target.value.toLowerCase();
    const results = this.state.students.filter((students) => {
      return (
        students.firstName.includes(search) || students.lastName.includes(search)
      )
    })
    this.setState({
      filteredList: results
    })
  }

  handleTagChange = (e) => {
    const search = e.target.value.toLowerCase();
    let tagMatchList = this.state.students;
    let results = this.state.students;



    tagMatchList.forEach((student) => {
      student.tags.forEach((tag) => {
        student.hasMatch = false
        if (tag.includes(search)) {
          student.hasMatch = true
        }
      })
    })

    results = tagMatchList.filter((student) => {
      return student.tagMatch === true
    })

    if (search.length === 0) {
      results = this.state.students;
    }

    this.setState({
      filteredList: results
    })
  }

  render() {
    return (
      <div className="App">
        <div className="studentContainer">

          <form action="" className="searchForm">
            <input type="text" placeholder="Search by name" onChange={this.handleNameChange} />
            <input type="text" placeholder="Search by tag" onChange={this.handleTagChange} />
          </form>

          {this.state.students ?
            <div>
              {this.state.filteredList.map((student) => {
                return (
                  <Student key={student.key} pic={student.pic} student={student} setTag={this.setTag} />
                )
              })}
            </div>
            : null}
        </div>
      </div>
    );
  }
}

export default App;