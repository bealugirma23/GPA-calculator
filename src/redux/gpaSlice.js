// gpaSlice.js

import { createSlice } from '@reduxjs/toolkit';

const gpaSlice = createSlice({
  name: 'gpa',
  initialState: {
    semesters: [
      { semester: '1st Semester', courses: [], totalCredits: 0, totalGradePoints: 0, semigpa: 0 },
    ],
  },
  reducers: {
    addCourse: (state, action) => {
      const { semesterIndex, course } = action.payload;
      state.semesters[semesterIndex].courses.push(course);
      // Your existing logic to update totalCredits, totalGradePoints, and semigpa
    },
    removeCourse: (state, action) => {
      const { semesterIndex, courseIndex } = action.payload;
      state.semesters[semesterIndex].courses.splice(courseIndex, 1);
      // Your existing logic to update totalCredits, totalGradePoints, and semigpa
    },
  },
});

export const { addCourse, removeCourse } = gpaSlice.actions;
export default gpaSlice.reducer;
