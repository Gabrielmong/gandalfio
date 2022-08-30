import React from "react";

function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#71ba61" : "#e6e6e6",
    color: props.isHeld ? "white" : "black",
  };
  return (
    <>
      <div className="dieFace" style={styles} onClick={props.holdDie}>
        <h2 className="unselectable">{props.value}</h2>
      </div>
    </>
  );
}

export default Die;
