import { CgAdd } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

function Home() {
  const [semesters, setSemesters] = useState([
    { semester: "1st year 1nd Semester", courses: [] },
  ]);
  const [totalCredits, setTotalCredits] = useState(0);
  const addSemester = () => {
    setSemesters((prevSemesters) => [
      ...prevSemesters,
      {
        semester: `${prevSemesters.length}st Year ${
          prevSemesters.length + 1
        }nd Semester `,
        courses: [],
      },
    ]);
  };

  const addCourse = (semesterIndex, course) => {
    setSemesters((prevSemesters) => {
      const newSemesters = [...prevSemesters];
      newSemesters[semesterIndex] = {
        ...newSemesters[semesterIndex],
        courses: [...newSemesters[semesterIndex].courses, course],
        totalCredits: newSemesters[semesterIndex].totalCredits + parseFloat(course.creditHours),
      };
      return newSemesters;
    });
    // Update totalCredits
    setTotalCredits(
      (prevTotalCredits) => prevTotalCredits + parseFloat(course.creditHours)
    );
    
  };
  function calculate() {
    var scale = {
      "A+": 4.0,
      A: 4.0,
      "A-": 3.75,
      "B+": 3.5,
      B: 3.0,
      "B-": 2.75,
      "C+": 2.5,
      C: 2,
      "C-": 1.75,
      D: 1.5,
      F: 0,
    };
  }
  return (
    <div className="flex-col  xl:px-[4.8rem] overflow-x-auto min-h-screen">
      <p className="text-white dark:text-black text-justify text-xl xl:text-3xl px-7 mt-6 ">
        The grade chart below shows the scale that will be used to calculate
        your grade point average. You only need to worry about selecting your
        grade scale if you intend to enter information in step 4 below. Grade
        Points Every card holds a semistor and one row holds one year... enjoy
      </p>
      <div className="mt-8">
        <div className="grid grid-cols-1 gap-7 mx-8 xl:grid-cols-4">
          {semesters.map((semester, index) => (
            <div className="" key={index}>
              <div className="text-white text-2xl font-bold uppercase">
                {semester.semester}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const course = {
                    name: e.target.courseName.value,
                    grade: e.target.grade.value,
                    creditHours: e.target.creditHours.value,
                  };
                  addCourse(index, course);
                }}
              >
                <div className="items-stretch flex justify-between gap-3.5 mt-5  px-3.5 py-2.5 rounded border border-solid border-white">
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
                      onChange={calculate()}
                      className="justify-center text-white bg-black h-11 items-stretch border flex gap-1.5 px-2 py-2 rounded border-solid border-white self-start"
                      id="select"
                    >
                      <option value="4">A+</option>
                      <option value="4">A</option>
                      <option value="3.75">A-</option>
                      <option value="3.5">B+</option>
                      <option value="3">B</option>
                      <option value="2.75">B-</option>
                      <option value="2.5">C+</option>
                      <option value="2">C</option>
                      <option value="1.75">C-</option>
                      <option value="1">D</option>
                      <option value="0">F</option>
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

              <table className="w-full table-white mt-5 text-white border border-solid border-white">
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
                        {" "}
                        <button className="justify-center items-center w-auto rounded bg-red-500 flex  flex-col p-2 self-start">
                          <FaPlus size={15} />
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
                  <div className="text-amber-500 text-2xl">{totalCredits}</div>
                  <div className="text-white text-2xl font-bold">GPA</div>
                  <div className="text-amber-500 text-2xl">3.97</div>
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
    </div>
  );
}

export default Home;
