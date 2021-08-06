import React from "react";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      name: "",
      email: "",
      password: "",
      phone: "",
    };
  }
  //componentDidMount() {}

  //   fetch("http://localhost:3005/signup", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       this.setState({ user: result });
  //     });
  // }
  // .then(
  //   (result) => {
  //     this.setState({
  //       isLoaded: true,
  //       user: result,
  //     });

  //   },
  //   // Note: it's important to handle errors here
  //   // instead of a catch() block so that we don't swallow
  //   // exceptions from actual bugs in components.
  //   (error) => {
  //     this.setState({
  //       isLoaded: true,
  //       error,
  //     });
  //   }
  // );

  componentDidUpdate() {
    fetch("http://localhost:3005/signup", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({ user: result });
      });
  }

  // componentDidMount() {
  //   console.log("componentDidMount");
  // }
  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }

  fun1 = (e) => {
    if (e.target.name === "name") {
      this.setState({ name: e.target.value });
    } else if (e.target.name === "phone") {
      this.setState({ phone: e.target.value });
    } else if (e.target.name === "email") {
      this.setState({ email: e.target.value });
    } else if (e.target.name === "password") {
      this.setState({ password: e.target.value });
    }
  };

  fun2 = () => {
    // const user = this.state.user;
    // user.push({ name: this.state.name, phone: this.state.phone });
    // var body = {
    //   name: this.state.name,
    //   phone: this.state.phone,
    // };
    // this.setState({ user });
    fetch("http://localhost:3005/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        password: this.state.password,
      }),
    });
  };
  //   componentDidUpdate() {
  //     console.log("componentDidUpdate");
  //   }
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            onChange={(e) => this.fun1(e)}
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            onChange={(e) => this.fun1(e)}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            onChange={(e) => this.fun1(e)}
          />
          <br />
          <input
            type="number"
            name="phone"
            placeholder="Enter Your Phone Number"
            onChange={(e) => this.fun1(e)}
          />
          <br />
          <button onClick={this.fun2}>Submit</button>
        </div>
        {this.state.user.map((result) => {
          return (
            <div>
              <div>
                {result.name}-{result.phone}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Signup;
