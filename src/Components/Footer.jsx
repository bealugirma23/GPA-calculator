import React from "react";

const Footer = () => {
  return (
    <footer className="flex pt-4 xl:mt-20 bottom-0  sticky  p-2 bg-violet-600 w-full  border-t-white border-t border-solid ">
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
  );
};

export default Footer;