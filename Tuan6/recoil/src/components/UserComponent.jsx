import React, { useState } from "react";
import { useRecoilState } from "recoil";
import UserAtom from "../states/UserAtom";
import UserNameAtom from "../states/UserNameStom";

export default function UserComponent() {
  var [user, setUser] = useRecoilState(UserAtom);
  var [username, setUserName] = useRecoilState(UserNameAtom);
  console.log(user);

  function handleChangeUser(){
    var status_Login = (user === "Login" ? "Logout" : "Login")
    setUser(status_Login)

    if(status_Login === "Logout"){
        setUserName(username = "Minh Tuấn");
    }
    else
        setUserName(username = "");
  }
  
  return (
    <>
      <div>UserComponent</div>
      <h3>UserName: {username}</h3>
      <button onClick={handleChangeUser}>{user === "Login" ? "Logout" : "Login" }</button>
    </>
  );
}
