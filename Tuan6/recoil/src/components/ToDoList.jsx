import React from "react";
import TodoListAtom from '../states/TodoListAtom'
import { useRecoilValue } from 'recoil'

export default function ToDoList() {
  var todoList = useRecoilValue(TodoListAtom);
  return (
    <>
      <div>ToDoList</div>
      {todoList.map((item, index) => (
        <p key={index}> {item} <br /></p>
      ))}
    </>
  );
}
