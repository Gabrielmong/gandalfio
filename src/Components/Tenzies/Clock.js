import React from "react";
  
export default function Clock(props) {

    const styles = {
        color: props.isActive ? "#71ba61" : "black",
        fontFamily: "Karla",
    }

  return (
    <div className={props.styles.timer}>
      <span className={props.styles.digits} style={styles}>
        {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
      </span>
      <span className={props.styles.digits} style={styles}>
        {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
      </span>
    </div>
  );
}