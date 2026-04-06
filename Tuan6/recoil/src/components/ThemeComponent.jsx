import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import ThemeAtom from "../states/ThemeAtom";

export default function ThemeComponent() {
  var theme = useRecoilValue(ThemeAtom);
  var [themeValue, setThemeValue] = useRecoilState(ThemeAtom);

  function handleTheme() {
    setThemeValue(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      <div>ThemeComponent</div>
      <button onClick={handleTheme}>
        Theme {theme === "light" ? "dark" : "light"}
      </button>
    </>
  );
}
