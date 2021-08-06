import React, { Component } from "react";
import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

export default function Demo() {
  const [info, Sinfo] = useState(["gfgh", "dddd"]);
  const [name, uName] = useState("fdx");
  const [filter, uFilter] = useState("filter");
  var res;
  //const [cnt, ucnt] = useState(1);
  var cnt = 1;

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    fetch(
      "https://gist.githubusercontent.com/yannski/3019778/raw/dfb34d018165f47b61b3bf089358a3d5ca199d96/movies.json"
    )
      .then((response) => response.json())
      .then((data) => Sinfo(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div style={{ padding: "10%" }}>
      <input type="text" onChange={(e) => uName(e.target.value)} />
      <br />
      <br />

      {info
        .filter((e) => e.title === name)
        .map((res) => (
          <div>
            result - {res.title}-{res.rating}
          </div>
        ))}

      <br />
      <br />
      <Table style={{ border: "2px solid grey" }}>
        <thead>
          <tr>
            <th>SNO</th>
            <th>Title</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {info.map((info) => (
            <tr>
              <td>{cnt++}</td>
              <td>{info.title}</td>
              <td>{info.rating}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
