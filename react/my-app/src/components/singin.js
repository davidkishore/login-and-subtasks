import react, { useState } from "react";
import { useHistory } from "react-router-dom";
import React from "react";

export default function Signin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [user, setuser] = useState([]);
  const [vemail, setvemail] = useState("sdfghgd");
  const [vpass, setvpass] = useState("sfd");
  const [a1, seta1] = useState("sample1");

  // const [test, changetest] = useState("hai");

  let history = useHistory();

  const fun = async () => {
    fetch("http://localhost:3005/signup/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((res) => res.result)

      .then((data) => {
        if (data.email === email) {
          setvemail("Correct your mail");
        }
        if (data.password === password) {
          setvpass("Correct your password");
        }
        if (data.email === email && data.password === password) {
          //setuser(data);
          //console.log("signin", data._id);
          //const id = data.id;
          history.push({ pathname: "/userinfo", state: data._id });
        }

        //console.log("data", data.name);
      })

      .catch((error) => {
        // handle your errors here
        console.error(error);
      });
    // const tes = result.json();
    // console.log("success", tes.data);
    // const res = result.data;
    // setuser(res);
  };
  // const f2 = () => {
  //   changetest("bai");
  // };
  return (
    <div>
      <div>
        <input
          type="email"
          name="email"
          onChange={(e) => setemail(e.target.value)}
        />
        <br></br>
        {vemail}
        <br></br>
        <input
          type="password"
          name="password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <br></br>
        {vpass}
        <br></br>
        <button onClick={fun}>Submit</button>
        <br></br>

        <ul>{user.name}</ul>
        {/* <button onClick={f2}>click</button>
        {test} */}
      </div>
    </div>
  );
}
