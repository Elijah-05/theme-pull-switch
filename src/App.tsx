import { useEffect } from "react";
import Root from "./root/Root";
import { useAtom } from "jotai";
import { theme } from "./store/store";

const App = () => {
  const [getTheme, setTheme] = useAtom(theme);
  const localStorageTheme =
    (localStorage.getItem("theme") != null && localStorage.getItem("theme")) ||
    getTheme;

  useEffect(() => {
    setTheme(localStorageTheme);
    if (
      getTheme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [getTheme, localStorageTheme, setTheme]);

  console.log({getTheme})

  return (
    <div
      className={`dark:bg-slate-900 duration-1000 bg-gradient-to-t ${
        localStorageTheme !== "dark" && "from-secondary to-primary"
      }`}
    >
      <Root />
    </div>
  );
};

export default App;
