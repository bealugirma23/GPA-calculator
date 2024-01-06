// GPACalculator.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCourse, removeCourse } from '../redux/gpaSlice';

const GPACalculator = () => {
  const dispatch = useDispatch();
  const semesters = useSelector((state) => state.gpa.semesters);

  const handleAddCourse = (semesterIndex, course) => {
    dispatch(addCourse({ semesterIndex, course }));
  };

  const handleRemoveCourse = (semesterIndex, courseIndex) => {
    dispatch(removeCourse({ semesterIndex, courseIndex }));
  };

  // Your existing component logic using semesters, handleAddCourse, and handleRemoveCourse

  return (
    <div>
      {semesters.map((semester, semesterIndex) => (
        <div key={semesterIndex}>
          <h2>{semester.semester}</h2>
          <p>Total Credits: {semester.totalCredits}</p>
          <p>Semester GPA: {semester.semigpa.toFixed(2)}</p>
          <table>
            <tbody>
              {semester.courses.map((course, courseIndex) => (
                <tr key={courseIndex}>
                  <th scope="row">{courseIndex}</th>
                  <th className="Courses">{course.name}</th>
                  <th className="grade">{course.grade}</th>
                  <th className="credit">{course.creditHours}</th>
                  <th className="credit">
                    <button
                      onClick={() => handleRemoveCourse(semesterIndex, courseIndex)}
                      className="justify-center items-center w-auto rounded bg-red-500 flex flex-col p-2 self-start"
                    >
                      Remove Course
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Add Course Button */}
          <button
            onClick={() => handleAddCourse(semesterIndex, { name: 'New Course', grade: 'A', creditHours: 3 })}
            className="justify-center items-center w-auto rounded bg-green-500 flex flex-col p-2 self-start"
          >
            Add Course
          </button>
        </div>
      ))}
    </div>
  );
};

export default GPACalculator;
