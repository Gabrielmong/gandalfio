import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div className="card--content">
          <h1 className="card--content--title">{props.info.title}</h1>
          <p className="card--content--description">
            {props.info.description}
          </p>
        </div>
      </div>
    </>
  );
}
