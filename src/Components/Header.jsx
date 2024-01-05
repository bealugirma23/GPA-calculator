import { useEffect, useState } from "react";

const Header = (onoff) => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentPath(path);
  }, []);
  return (
    <nav className="px-6 py-3 z-30 flex w-full justify-between gap-5  max-md:max-w-full max-md:flex-wrap">
      <div className=" flex xl:flex-col justify-center  w-full">
        <div className="flex  w-[13.8rem] ">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b83680be6b789ac69a0af274c1ae5ee48a32709293f754ad6d6e393401c2ee6b?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b83680be6b789ac69a0af274c1ae5ee48a32709293f754ad6d6e393401c2ee6b?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b83680be6b789ac69a0af274c1ae5ee48a32709293f754ad6d6e393401c2ee6b?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b83680be6b789ac69a0af274c1ae5ee48a32709293f754ad6d6e393401c2ee6b?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b83680be6b789ac69a0af274c1ae5ee48a32709293f754ad6d6e393401c2ee6b?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b83680be6b789ac69a0af274c1ae5ee48a32709293f754ad6d6e393401c2ee6b?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b83680be6b789ac69a0af274c1ae5ee48a32709293f754ad6d6e393401c2ee6b?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b83680be6b789ac69a0af274c1ae5ee48a32709293f754ad6d6e393401c2ee6b?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
            className="aspect-[1.05] object-contain object-center w-[105px] overflow-hidden shrink-0 max-w-full"
          />

          <div className="flex justify-start items-center  text-slate-200 text-center text-5xl font-bold tracking-tighter ">
            <div className="">
              <h1 className="font-semibold flex  items-start  text-5xl  text-slate-200">
                GPA
              </h1>
              <h1 className="font-light text-xl  text-slate-200">CALCULATOR</h1>
            </div>
          </div>
        </div>
      </div>

      <ul className="self-center xl:w-[12.8rem] flex w-full  justify-center xl:justify-between gap-5 my-auto">
        <li>
          <a
            href="/"
            className={`text-center  text-2xl font-bold leading-10 tracking-tighter hover:underline ${
              currentPath === "/"
                ? "text-blue-500 underline decoration-wavy"
                : "text-white"
            }`}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="/about"
            className={`text-center text-2xl font-bold leading-10 tracking-tighter hover:underline ${
              currentPath === "/about"
                ? "text-blue-500 underline decoration-wavy"
                : "text-white "
            }`}
          >
            ABOUT
          </a>
        </li>
        {/* <li>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            
          </label>
        </li> */}
      </ul>
    </nav>
  );
};

export default Header;
