import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import ThemeAtom from "../states/ThemeAtom";
import UserNameAtom from "../states/UserNameStom";

export default function ThemeComponent() {
  var theme = useRecoilValue(ThemeAtom);
  var [themeValue, setThemeValue] = useRecoilState(ThemeAtom);
  var userName = useRecoilValue(UserNameAtom)

  function handleTheme() {
    setThemeValue(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      <div>ThemeComponent</div>
      <h3>UserName: {userName}</h3>
      <button onClick={handleTheme}>
        Theme {theme === "light" ? "dark" : "light"}
      </button>
    </>
  );
}
