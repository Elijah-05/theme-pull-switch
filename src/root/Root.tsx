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
    setSwitchFall(true);
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
    <div className="relative h-screen max-h-screen border-slate-70 flex items-center justify-center">
      <div className="absolute top-0 right-8 md:right-[15vw] z-50 ">
        <div
          className={`top-0  -translate-x-1/2 w-1 bg-slate-600 ${
            isSwitchFall ? "h-[70vh] md:h-[40vh] duration-1000" : "h-0"
          } ${
            switchHovered
              ? "drop-shadow-[4px_0px_1px_rgba(0,0,0,0.2)]"
              : "drop-shadow-[4px_0px_3px_rgba(0,0,0,0.3)]"
          } duration-500`}
        />
        <div
          className={`w-10 ${switchColor} ${
            isSwitchClicked
              ? "translate-y-1 duration-500"
              : "hover:-translate-y-4 duration-1000"
          } h-16 -translate-x-1/2 rounded-full drop-shadow-[3px_14px_8px_rgba(0,0,0,0.2)] cursor-pointer -translate-y-8 hover:drop-shadow-[3px_10px_4px_rgba(0,0,0,0.3)] group`}
          onMouseEnter={handleSwitchHover}
          onMouseLeave={handleSwitchHover}
          onClick={handleToggleTheme}
        />
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
