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
      // Your existing addCourse logic
    },
    removeCourse: (state, action) => {
      // Your existing removeCourse logic
    },
  },
});

export const { addCourse, removeCourse } = gpaSlice.actions;
export default gpaSlice.reducer;
