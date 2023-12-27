import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { theme } from "../store/store";

const Root = () => {
  const [getTheme, setTheme] = useAtom(theme);
  const [switchHovered, setSwitchHovered] = useState(false);
  const [isSwitchClicked, setIsSwitchClicked] = useState(false);
  const [isSwitchFall, setSwitchFall] = useState(false);
  const isDark = getTheme === "dark" ? true : false;
  const switchColor = getTheme === "light" ? "bg-white" : "bg-primary";

  useEffect(() => {
    setTimeout(() => {
      setSwitchFall(true);
    }, 100);
  }, []);

  const handleSwitchHover = () => {
    setTimeout(() => {
      setSwitchHovered(!switchHovered);
    }, 1000 * 3);
  };

  const handleToggleTheme = () => {
    localStorage.setItem(
      "theme",
      localStorage.getItem("theme") == "light" ? "dark" : "light"
    );
    setTheme(getTheme == "light" ? "dark" : "light");
    setIsSwitchClicked(!isSwitchClicked);
    setTimeout(() => {
      setIsSwitchClicked(isSwitchClicked);
    }, 200);
  };

  return (
    <div className=" h-screen max-h-screen border-slate-70 flex items-center justify-center">
      <div className="absolute top-0 right-8 md:right-[15vw] z-50 ">
        <div
          className={` w-1 bg-slate-600 ${
            isSwitchFall ? "h-[70vh] md:h-[40vh] duration-1000" : "h-0"
          } ${
            switchHovered
              ? "drop-shadow-[4px_0px_1px_rgba(0,0,0,0.2)]"
              : "drop-shadow-[4px_0px_3px_rgba(0,0,0,0.3)]"
          } duration-500`}
        />
        <button
          className={`absolute -translate-x-1/2 ml-[1.5px] -mb-2 bottom-0 w-10 ${switchColor} ${
            isSwitchClicked
              ? "translate-y-8 duration-500"
              : "hover:translate-y-3 duration-1000"
          } h-16 rounded-full drop-shadow-[3px_14px_8px_rgba(0,0,0,0.2)] hover:drop-shadow-[3px_10px_4px_rgba(0,0,0,0.3)] flex justify-center items-center`}
          onMouseEnter={handleSwitchHover}
          onMouseLeave={handleSwitchHover}
          onClick={handleToggleTheme}
        >
          <div className="border border-black bg-slate-300 h-8 rounded-full">
            <div
              className={`w-4 h-4 mt-[1px] bg-gray-700 rounded-full ${
                getTheme == "light" ? "translate-y-3" : ""
              } duration-300`}
            />
            <div className=" absolute top-0 translate-y-1/2 mt-2 left-1/2 text-gray-700 -translate-x-1/2 -mt-[1px] font-inter font- text-xs">
              1
            </div>
            <div className=" absolute left-1/2 text-gray-700 -translate-x-1/2 -mt-[1px] font-inter font- text-xs">
              0
            </div>
          </div>
        </button>
      </div>
      <div className={` mb-[30vh] flex flex-col text-white select-none`}>
        <div
          className={`flex items-center gap-4 bg-gradient-to-t from-secondary to-primary ${
            isDark && "text-transparent"
          } bg-clip-text drop-shadow-[0px_8px_10px_rgba(0,0,0,0.2)] duration-500`}
        >
          <div className="">
            <span className="text-[242px] ">08:26</span>
            <p className=" -mt-12 text-base text-white font-inter font-light tracking-wider text-center">
              Monday, December 31, 2023
            </p>
          </div>
          <span className="text-8xl mt-8">59</span>
        </div>
      </div>
      <div className="absolute bottom-10 font-inter text-xs text-center opacity-80 text-white  ">
        <p className=" font-extralight tracking-wider">
          Designed & Implemented by
        </p>
        <p className=" tracking-wider">Elyas Abebe</p>
      </div>
    </div>
  );
};

export default Root;
