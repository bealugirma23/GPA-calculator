import { CgAdd } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import Footer from "../Components/Footer";
function Home() {
  const [semesters, setSemesters] = useState([
    {
      semester: "1st year 1nd Semester",
      courses: [],
      totalCredits: 0,
      semigpa: 0,
      totalGradePoints: 0,
    },
  ]);

  const addSemester = () => {
    setSemesters((prevSemesters) => [
      ...prevSemesters,
      {
        semester: `${prevSemesters.length}st Year ${
          prevSemesters.length + 1
        }nd Semester `,
        courses: [],
        totalCredits: 0,
        totalGradePoints: 0,
        semigpa: 0,
      },
    ]);
  };

  const addCourse = (semesterIndex, course) => {
    setSemesters((prevSemesters) => {
      const newSemesters = [...prevSemesters];
      const semester = newSemesters[semesterIndex];

      const gradePoints = calculateGradePoints(course.grade);

      const updatedSemester = {
        ...semester,
        courses: [...semester.courses, course],
        totalCredits: semester.totalCredits + parseFloat(course.creditHours),
        totalGradePoints:
          semester.totalGradePoints +
          parseFloat(course.creditHours) * gradePoints,
      };

      console.log("totalCredits:", updatedSemester.totalCredits);
      console.log("totalGradePoints:", updatedSemester.totalGradePoints);
      updatedSemester.semigpa =
        updatedSemester.totalGradePoints / updatedSemester.totalCredits;

      console.log("semigpa:", updatedSemester.semigpa);

      newSemesters[semesterIndex] = updatedSemester;
      return newSemesters;
    });
  };

  const calculateGradePoints = (grade) => {
    switch (grade) {
      case "A+":
      case "A":
        return 4.0;
      case "A-":
        return 3.7;
      case "B+":
        return 3.3;
      case "B":
        return 3.0;
      case "B-":
        return 2.7;
      case "C+":
        return 2.3;
      case "C":
        return 2.0;
      case "C-":
        return 1.7;
      case "D":
        return 1.3;
      case "F":
        return 0;
      default:
        return 0;
    }
  };

  const calculateCumulativeGPA = () => {
    const totalGradePoints = semesters.reduce(
      (sum, semester) => sum + semester.totalGradePoints,
      0
    );
    const totalCredits = semesters.reduce(
      (sum, semester) => sum + semester.totalCredits,
      0
    );

    if (totalCredits === 0) {
      return 0; // Avoid division by zero
    }

    return totalGradePoints / totalCredits;
  };

  const handleRemoveCourse = (semesterIndex, courseIndex) => {
    setSemesters((prevSemesters) => {
      const newSemesters = [...prevSemesters];
      const semester = newSemesters[semesterIndex];

      // Create a new array without the course to be removed
      const updatedCourses = semester.courses.filter(
        (_, index) => index !== courseIndex
      );

      // Calculate totalCredits and semigpa after removing the course
      const updatedSemester = {
        ...semester,
        courses: updatedCourses,
        totalCredits: updatedCourses.reduce(
          (sum, course) => sum + parseFloat(course.creditHours),
          0
        ),
      };

      // Check if there are courses left to avoid division by zero
      if (updatedSemester.courses.length > 0) {
        const totalGradePoints = updatedCourses.reduce((sum, course) => {
          const gradePoints = calculateGradePoints(course.grade);
          return sum + parseFloat(course.creditHours) * gradePoints;
        }, 0);

        updatedSemester.semigpa =
          totalGradePoints / updatedSemester.totalCredits;
      } else {
        // No courses left, reset totalGradePoints and semigpa
        updatedSemester.totalGradePoints = 0;
        updatedSemester.semigpa = 0;
      }

      newSemesters[semesterIndex] = updatedSemester;
      return newSemesters;
    });
  };

  return (
    <div className="flex-col  xl:px-[4.8rem] overflow-x-auto min-h-screen">
      <h3 className="text-white text-[48px] px-7 font-bold">Welcome</h3>
      <p className="text-[#888888] dark:text-black xl:w-[88rem] text-justify text-xl xl:text-[16px] px-7 ">
        The grade chart below shows the scale that will be used to calculate
        your grade point average. You only need to worry about selecting your
        grade scale if you intend to enter information in step 4 below. Grade
        Points Every card holds a semistor and one row holds one year... enjoy
      </p>
      {/* <div className="px-64 py-10">
          <hr></hr>
      </div> */}

      <div className="mt-8">
        <div className="grid grid-cols-1 gap-7 mx-8 xl:grid-cols-4">
          {semesters.map((semester, semesterIndex) => (
            <div className="" key={semesterIndex}>
              <h5 className="text-white text-[24px] font-bold uppercase">
                {semester.semester}
              </h5>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const course = {
                    name: e.target.courseName.value,
                    grade: e.target.grade.value,
                    creditHours: e.target.creditHours.value,
                  };
                  addCourse(semesterIndex, course);
                }}
              >
                <div className="items-stretch flex justify-between gap-3.5 mt-5  px-3.5 py-2.5 bg-[#272628] rounded-xl border border-solid border-[#626262]">
                  <div className="items-stretch flex gap-3.5 pr-6 max-md:pr-5">
                    <input
                      type="text"
                      name="courseName"
                      placeholder="Course Name"
                      className="text-white w-[6.8rem] h-11 bg-transparent text-base leading-6 whitespace-nowrap items-stretch border border-[color:var(--Neutral-300,#E1E6EF)] grow justify-center px-2.5 py-1.5 rounded border-solid"
                    ></input>

                    <select
                      type="text"
                      name="grade"
                      className="justify-center text-white bg-[#272628] h-11 items-stretch border flex gap-1.5 px-2 py-2 rounded border-solid border-white self-start"
                      id="select"
                    >
                      <option value="A+">A+</option>
                      <option value="A">A</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B">B</option>
                      <option value="B-">B-</option>
                      <option value="C+">C+</option>
                      <option value="C">C</option>
                      <option value="C-">C-</option>
                      <option value="D">D</option>
                      <option value="F">F</option>
                    </select>

                    <input
                      type="text"
                      name="creditHours"
                      placeholder="Credit Hours"
                      className="text-white w-10 h-11 bg-transparent text-base leading-6 whitespace-nowrap items-stretch border border-[color:var(--Neutral-300,#E1E6EF)] aspect-[2] justify-center px-2.5 py-1.5 rounded border-solid self-start"
                    ></input>
                  </div>
                  <button
                    type="submit"
                    className="justify-center items-center rounded bg-blue-500 flex aspect-[1.121212121212121] flex-col px-4 py-3 self-start"
                  >
                    <FaPlus size={20} color="white" />
                  </button>
                </div>
              </form>

              <table className="w-full table-white mt-5 text-white border  p-2 border-solid border-[#626262] ">
                <thead>
                  <tr>
                    <th scope="col">index</th>
                    <th scope="col">Courses</th>
                    <th scope="col">Grade</th>
                    <th scope="col">Credits</th>
                  </tr>
                </thead>
                {/* Render your course data here */}
                {semester.courses.map((course, courseIndex) => (
                  <tbody key={courseIndex}>
                    <tr className="">
                      <th scope="row">{courseIndex}</th>
                      <th className="Courses">{course.name}</th>
                      <th className="grade">{course.grade}</th>
                      <th className="credit">{course.creditHours}</th>
                      <th className="credit">
                        <button
                          onClick={() =>
                            handleRemoveCourse(semesterIndex, courseIndex)
                          }
                          className="justify-center items-center w-auto rounded bg-red-500 flex  flex-col p-2 self-start"
                        >
                          <FaPlus style={{transform: 'rotate(40deg)' }} size={15} />
                        </button>
                      </th>
                    </tr>
                  </tbody>
                ))}
              </table>
              {/* Add course form */}
              <div className="border flex w-full flex-col items-stretch  rounded ">
                <div className="justify-between items-stretch content-center flex-wrap flex gap-5 mt-5 px-9 ">
                  <div className="text-white text-2xl font-bold">Total</div>
                  <div className="text-blue-400 text-2xl">
                    {semester.totalCredits}
                  </div>
                  <div className="text-white text-2xl font-bold">GPA</div>
                  <div className="text-blue-400 text-2xl">
                    {semester.semigpa.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="xl:ml-8 justify-center items-center flex">
            <button onClick={addSemester} className="flex flex-col">
              <div className="items-center  flex flex-col justify-center">
                <CgAdd size={70} color="white" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Footer
          totalCredits={semesters.reduce(
            (sum, semester) => sum + semester.totalCredits,
            0
          )}
          cumulativeGPA={calculateCumulativeGPA()}
        />
      </div>
    </div>
  );
}

export default Home;
