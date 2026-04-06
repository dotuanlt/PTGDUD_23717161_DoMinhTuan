import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import ThemeAtom from '../states/ThemeAtom'

export default function ThemeComponent() {
    var theme = useRecoilValue(ThemeAtom);
    var [themenew, setTheme] = useRecoilState(ThemeAtom);

    function handleTheme(){
        setTheme(theme === "light" ? "light" : "dark");
    }

  return (
    <>
        <div>ThemeComponent</div>
        <button onClick={handleTheme}>Theme {theme === "light" ? "light" : "dark"}</button>
    </>
    
  )
}
