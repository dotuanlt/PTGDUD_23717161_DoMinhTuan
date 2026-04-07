import React, { useState } from "react";
import TodoListAtom from "../states/TodoListAtom";
import { useRecoilState } from "recoil";

export default function TodoInput() {
  var [todoList, setTodoList] = useRecoilState(TodoListAtom);
  var [input, setInput] = useState("");
  console.log(todoList);

  function handleAdd() {
    if (input.trim() === "") return;

    setTodoList([...todoList, input]);
    setInput("");
  }
  return (
    <>
      <div>TodoInput</div>
      <label htmlFor="">Title: </label>
      <input
        type="text"
        name=""
        id=""
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleAdd}>Add todo</button>
    </>
  );
}
