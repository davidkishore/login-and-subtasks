import React, { useState } from "react";

export default function App() {
  const [a, setTodos] = useState([{ name: "fff", phone: "222" }]);

  const fun = () => {
    console.log("jjjjjj");
    const b = { name: "kkk", phone: "888" };
    setTodos((a) => [...a, b]);
  };
  return (
    <div>
      <button onClick={(e) => fun()}>submit</button>
      {a.map((res) => {
        return (
          <div>
            {res.name}-{res.phone}
          </div>
        );
      })}
    </div>
  );
}
// import React from "react";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      email: "",
      password: "",
      hello: "hhhhhh",
      i: 0,
    };
  }

  fun = () => {
    return (
      <div>
        {this.state.email}-{this.state.password}
      </div>
    );
  };

  componentDidUpdate() {
    //console.log(this.state.a);
  }

  async fun2() {
    await fetch("http://localhost:3005/signup", {
      method: "GET",
    })
      .then((result) => result.json())
      .then((res) => this.setState({ user: res }));
    this.state.user.map((res) => console.log(res.name));
    // console.log("this is user", this.state.user);
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            onChange={(e) => this.setState({ email: e.target.value, i: 0 })}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            onChange={(e) => this.setState({ password: e.target.value, i: 0 })}
          />
          <br />
          {/* <button onClick={this.fun2.bind(this)}>Submit</button> */}
          <button onClick={() => this.setState({ i: 1 })}>Submit</button>

          {this.state.i === 1 ? this.state.email : ""}
        </div>

        {/* {this.state.user.map((result) => {
          return (
            <div>
              <div>
                {result.name}-{result.phone}
              </div>
            </div>
          );
        })} */}
      </div>
    );
  }
}
// export default Signin;
