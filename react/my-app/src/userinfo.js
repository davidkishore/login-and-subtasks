import react, { useState, useEffect } from "react";
import UserInfo from "./components/usereditcomp";
import React from "react";

export default function Userinfo(props) {
  const [id, userid] = useState(props.location.state);
  const [info, useinfo] = useState("");

  useEffect(() => {
    fetch("http://localhost:3005/userinfo", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((result) => result.json())
      .then((res) => useinfo(res));
  });

  return (
    <div>
      {<UserInfo />}
      <div>name : {info.name}</div>
      <div>email : {info.email}</div>
      <div>password : {info.password}</div>
      <div>
        <button>Edit</button>
      </div>
    </div>
  );
}

// {props.location.state}
