import React, { useState } from "react";

const Root = () => {
    const [switchHovered, setSwitchHovered] = useState(false)

    const handleSwitchHover = () => {
        setSwitchHovered(!switchHovered)
    }


  return (
    <div className="relative h-screen max-h-screen border-slate-70 flex items-center justify-center">
      <div className="absolute top-0 right-[15vw] " >
        <div className={`top-0 -translate-x-1/2 w-1 bg-slate-600 h-[40vh] ${switchHovered ? 'drop-shadow-[4px_0px_1px_rgba(0,0,0,0.2)]' : 'drop-shadow-[4px_0px_3px_rgba(0,0,0,0.3)]'} duration-500`} />
        <div className={`w-10 bg-white h-16 -translate-x-1/2 rounded-full drop-shadow-[3px_14px_8px_rgba(0,0,0,0.2)] cursor-pointer -translate-y-8  hover:translate-y-0 duration-1000 hover:drop-shadow-[3px_10px_4px_rgba(0,0,0,0.3)] group`} onMouseEnter={handleSwitchHover} onMouseLeave={handleSwitchHover} />
      </div>
      <div className={` mb-[30vh] flex flex-col text-white select-none`}>
        <div className="flex items-center gap-4 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.2)]">
          <span className="text-[242px]  ">08:26</span>
          <span className="text-8xl mt-8">59</span>
        </div>
        <p className=" -mt-12 text-lg font-light text-center">Monday, December 31, 2023</p>
      </div>
    </div>
  );
};

export default Root;
