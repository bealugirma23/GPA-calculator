value="4" = A+
value="4">A
value="3.75">A-
value="3.5">B+
value="3">B
value="2.75">B-
value="2.5">C+
value="2">C
value="1.75">C-
value="1">D
value="0">F

- adding new object that iterates the name
        eg, is the fist object is 1 YEAR 1 SEMISTOR them when the button is clicked the semistor iterates by one
- inside the object their is items they have to be added and removed
        eg, it takes input from the user when the user adds it it'll be added in the json file when removed it will be removed
- all semistors gpa and total crediet will be added and displayed
-

<!-- 
<div className="items-stretch flex justify-between gap-0 mt-2 px-3 py-2.5 rounded">
    <div className="items-start flex gap-3 pr-6 max-md:pr-5">
      <div className="text-white text-base leading-6 self-center grow whitespace-nowrap my-auto">
        1
      </div>
      <div className="text-white text-base leading-6 whitespace-nowrap items-stretch border self-stretch grow justify-center px-2.5 py-1.5 rounded border-solid border-slate-200">
        Database
      </div>
      <div className="justify-center items-stretch border flex gap-1.5 px-2 py-2 rounded border-solid border-white self-start">
        <div className="text-white text-base">A+</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/204cc3f11326841158203f446289d046ef586f8e796dfe3fbad1d03509154ed6?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
          className="aspect-[2] object-contain object-center w-2.5 fill-white stroke-[1.4px] stroke-white overflow-hidden self-center shrink-0 max-w-full my-auto"
        />
      </div>
      <div className="text-white text-base leading-6 whitespace-nowrap items-stretch border border-[color:var(--Neutral-300,#E1E6EF)] aspect-[2] justify-center px-2.5 py-1.5 rounded border-solid self-start">
        3
      </div>
    </div>
    <div className="justify-center items-center rounded bg-red-500 flex aspect-[1.1515151515151516] flex-col px-3.5 py-2.5 self-start">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/80353c23cc42fb74f6a2a3600c6067f8bfc938a41c84eb4b92d1c4e47084922e?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
        className="aspect-[0.92] object-contain object-center w-3 overflow-hidden"
      />
    </div>
  </div> -->








  import Cards from "./Components/Card";
import Header from "./Components/Header";
import Bobtuon from "./Components/UI/Bobtuon";
import Some from "./some";
import { FaPlus } from "react-icons/fa6";

import { useState } from "react";
function App() {
  const [semesters, setSemesters] = useState([
    { semester: "1st Semester", courses: [] },
  ]);

  const addSemester = () => {
    setSemesters((prevSemesters) => [
      ...prevSemesters,
      { semester: `Semester ${prevSemesters.length + 1}`, courses: [] },
    ]);
  };

  const addCourse = (semesterIndex, course) => {
    setSemesters((prevSemesters) => {
      const newSemesters = [...prevSemesters];
      newSemesters[semesterIndex].courses.push(course);
      return newSemesters;
    });
  };
  return (
    <div className="flex flex-col min-h-screen">
      {/* <div className='absolute gradient-07 z-0'></div> */}
      {/* navigation bar */}
      <Header />
      {/* main body */}

      <main className="flex-col xl:px-[4.8rem] overflow-x-scroll">
        <p className="text-white text-justify text-xl xl:text-3xl px-7 mt-6 ">
          The grade chart below shows the scale that will be used to calculate
          your grade point average. You only need to worry about selecting your
          grade scale if you intend to enter information in step 4 below. Grade
          Points Every card holds a semistor and one row holds one year... enjoy
        </p>
        <div className="flex-row mt-6 p-4 md:flex xl:flex items-stretch  w-full">
          <div className="w-[22rem] ">
            <div className="flex flex-col  ">
              <div className="flex flex-col ">
                <div className="items-stretch flex grow flex-col">

                  {semesters.map((semester, index) => (
                    <div key={index}>
                      <h2>{semester.semester}</h2>
                      <table>
                        {/* Render your course data here */}
                        {semester.courses.map((course, courseIndex) => (
                          <tr key={courseIndex}>
                            <td>{course.name}</td>
                            <td>{course.grade}</td>
                            <td>{course.creditHours}</td>
                          </tr>
                        ))}
                      </table>
                      {/* Add course form */}
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
                        <input
                          type="text"
                          name="courseName"
                          placeholder="Course Name"
                        />
                        <input type="text" name="grade" placeholder="Grade" />
                        <input
                          type="number"
                          name="creditHours"
                          placeholder="Credit Hours"
                        />
                        <button className="bg-blue-600" type="submit">
                          Add Course
                        </button>
                      </form>
                    </div>
                  ))}
                  
                  <div className="text-white text-2xl font-bold uppercase">
                    1 Year 1st semistor
                  </div>
                  {/* Adding items */}
                  <div className="items-stretch flex justify-between gap-3.5 mt-5  px-3.5 py-2.5 rounded border border-solid border-white">
                    <div className="items-stretch flex gap-3.5 pr-6 max-md:pr-5">
                      <input
                        type="course"
                        placeholder="Course"
                        className="text-white w-[6.8rem] h-11 bg-transparent text-base leading-6 whitespace-nowrap items-stretch border border-[color:var(--Neutral-300,#E1E6EF)] grow justify-center px-2.5 py-1.5 rounded border-solid"
                      ></input>

                      <div className="justify-center items-stretch border flex gap-1.5 px-2 py-2 rounded border-solid border-white self-start">
                        <div className="text-white text-base">A+</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/204cc3f11326841158203f446289d046ef586f8e796dfe3fbad1d03509154ed6?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
                          className="aspect-[2] object-contain object-center w-2.5 fill-white stroke-[1.4px] stroke-white overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />
                      </div>

                      <input
                        type="crediet"
                        placeholder="Cre."
                        className="text-white w-10 h-11 bg-transparent text-base leading-6 whitespace-nowrap items-stretch border border-[color:var(--Neutral-300,#E1E6EF)] aspect-[2] justify-center px-2.5 py-1.5 rounded border-solid self-start"
                      ></input>
                    </div>
                    <button className="justify-center items-center rounded bg-blue-500 flex aspect-[1.121212121212121] flex-col px-4 py-3 self-start">
                      <FaPlus size={20} color="white" />
                    </button>
                  </div>

                  <table className="w-full table-white mt-5 text-white border border-solid border-white">
                    <thead>
                      <tr>
                        <th scope="col">index</th>
                        <th scope="col">Courses</th>
                        <th scope="col">Grade</th>
                        <th scope="col">Credits</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="">
                        <th scope="row">1</th>
                        <th class="Courses">Calculus</th>
                        <th class="grade">A+</th>
                        <th class="credit">4</th>
                        <th class="credit">
                          {" "}
                          <button className="justify-center items-center w-auto rounded bg-red-500 flex  flex-col p-2 self-start">
                            <FaPlus size={15} />
                          </button>
                        </th>
                      </tr>
                    </tbody>
                  </table>

                  <div className="border flex w-full flex-col items-stretch  rounded ">
                    <div className="justify-between items-stretch content-center flex-wrap flex gap-5 mt-60 px-9 py-3.5 max-md:mt-10 max-md:px-5">
                      <div className="text-white text-2xl font-bold">Total</div>
                      <div className="text-amber-500 text-2xl">20</div>
                      <div className="text-white text-2xl font-bold">GPA</div>
                      <div className="text-amber-500 text-2xl">3.97</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <Cards /> */}
            <Some />
          </div>

          <div className="xl:ml-8 justify-center items-center flex">
            <Bobtuon />
          </div>
        </div>
      </main>

      {/* footer  */}
      <footer className="flex pt-4 xl:mt-20 bottom-0 sticky p-2 bg-violet-600 w-full  border-t-white border-t border-solid ">
        <div className="flex-col  px-6 w-full justify-start items-start">
          <div className="flex justify-between w-full ">
            <div className="text-white text-3xl  ">Total Crediet hour</div>
            <div className="text-amber-500 text-4xl font-bold ">84</div>
          </div>
          <div className="items-stretch flex justify-between gap-2.5 ">
            <div className="text-white text-3xl font-bold grow ">
              Cumulative GPA
            </div>
            <div className="text-amber-500 text-4xl font-bold self-center whitespace-nowrap">
              3.8
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
