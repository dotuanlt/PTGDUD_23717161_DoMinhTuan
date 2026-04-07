import { useRecoilValue } from "recoil";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ThemeComponent from "./components/ThemeComponent";
import ThemeAtom from "./states/ThemeAtom";
import UserComponent from "./components/UserComponent";

function App() {
  var theme = useRecoilValue(ThemeAtom);
  console.log(theme);

  return (
    <>
      <div className={theme}>
        <div style={{margin: "10px", border: "1px solid red", padding: "20px"}}>
          <ComponentA></ComponentA>
          <ComponentB></ComponentB>
        </div>
        <div style={{margin: "10px", border: "1px solid red", padding: "20px"}}>
          <ThemeComponent></ThemeComponent>
        </div>
        <div style={{margin: "10px", border: "1px solid red", padding: "20px"}}>
          <UserComponent></UserComponent>
        </div>
      </div>
    </>
  );
}

export default App;
