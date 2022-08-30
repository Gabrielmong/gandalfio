import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div className="card--content">
          <div className="card-text-div">
            <h1 className="card--content--title">{props.info.title}</h1>
            <p className="card--content--description">
              {props.info.description}
            </p>
          </div>
          {(props.info.link || props.info.extLink) && (
            <div className="card-text-links">
              {props.info.link && (
                <Link to={props.info.link}>Take a look</Link>
              )}

              {props.info.extLink && (
                <a href={props.info.extLink} target="__blank">
                  Watch on Github
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
