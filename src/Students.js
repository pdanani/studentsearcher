

import { useEffect, useState } from 'react'
import 'react-bootstrap'
import React from 'react';

function Students() {
    console.log(students)
    return (
        <div class="container" className="StudentInfo">
            {students.map((student, i) => (
                <div class="row">
                    <div class="col"> <img src={student.pic} alt="new" /></div>
                    <div class="col">
                        {student.firstName + " " + student.lastName}
                        <br />
                        {"Email: " + student.email}
                        <br />
                        {"Company: " + student.company}
                        <br />
                        {"Skill: " + student.skill}
                        <br />
                        {"Average: " + student.grades.reduce((a, b) => parseInt(a) + parseInt(b)) / student.grades.length}
                    </div>
                </div>

            ))}
        </div>

    );
}
export default Students
