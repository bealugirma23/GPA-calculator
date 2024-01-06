import React from "react";

const Footer = ({ totalCredits, cumulativeGPA }) => {
  return (
    <footer className="flex pt-4 xl:mt-20 bottom-0  sticky  p-2 bg-[#191919]  w-full  border-t-gra border-t border-solid ">
      <div className="flex-col  px-6 w-full justify-start items-start">
        <div className="flex justify-between w-full ">
          <div className="text-white text-3xl  ">Total Crediet hour</div>
          <div className="text-blue-500 text-4xl font-bold ">
            {totalCredits}
          </div>
        </div>
        <div className="items-stretch flex justify-between gap-2.5 ">
          <div className="text-white text-3xl font-bold grow ">
            Cumulative GPA
          </div>
          <div className="text-blue-500 text-4xl font-bold self-center whitespace-nowrap">
            {cumulativeGPA.toFixed(2)}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
