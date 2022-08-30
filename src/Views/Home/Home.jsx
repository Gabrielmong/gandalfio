import React from "react";
import "./home.css";
import Info from "../../Assets/Data/dataHome.js";
import Card from "../../Components/Generic/Card";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="content">
          <h1>Home Page</h1>
          <p className="headDescription">
            I just built this in like a couple of hours because i wanted a portfolio kinda website</p>
          <p>
            So yeah, this is what i can kinda do at this point.
          </p>
          <a href="https://youtu.be/dQw4w9WgXcQ" target="__blank">Click me, like, please</a>
          {Info.map((info) => (
                <Card key={info.title} info={info} />
            ))}
        </div>
      </div>
    </>
  );
}
