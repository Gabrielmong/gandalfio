import React from "react";
import Info from "../../Assets/Data/dataProjects.js";
import Card from "../../Components/Generic/Card";

export default function Projects() {
  return (
    <>
      <div className="container">
        <div className="content">
          <h1>Small Projects I've done</h1>
          {Info.map((info) => (
                <Card key={info.title} info={info} />
            ))}
        </div>
      </div>
    </>
  );
}
