import { useRecoilValue } from "recoil";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ThemeComponent from "./components/ThemeComponent";
import ThemeAtom from "./states/ThemeAtom";
import UserComponent from "./components/UserComponent";
import TodoInput from "./components/TodoInput";
import ToDoList from "./components/ToDoList";
import AddCartComponent from "./components/AddCartComponent";
import CartComponent from "./components/CartComponent";

function App() {
  var theme = useRecoilValue(ThemeAtom);
  console.log(theme);

  return (
    <>
      <div className={theme}>
        {/* <div style={{margin: "10px", border: "1px solid red", padding: "20px"}}>
          <ComponentA></ComponentA>
          <ComponentB></ComponentB>
        </div>
        <div style={{margin: "10px", border: "1px solid red", padding: "20px"}}>
          <ThemeComponent></ThemeComponent>
        </div>
        <div style={{margin: "10px", border: "1px solid red", padding: "20px"}}>
          <UserComponent></UserComponent>
        </div> */}

        {/* <TodoInput></TodoInput>
        <ToDoList></ToDoList> */}

        <AddCartComponent></AddCartComponent>
        <CartComponent></CartComponent>
      </div>
    </>
  );
}

export default App;
