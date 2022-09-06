import {React, useEffect, useState} from "react";
import Info from "../../Assets/Data/dataProjects.js";
import Card from "../../Components/Generic/Card";
import styles from "./projects.module.css";

export default function Projects(props) {

  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle({
      container: (props.theme ? styles.containerDark : styles.containerLight),
      content : styles.content,
      title : (props.theme ? styles.titleDark : styles.titleLight),
    });
  }, [props.theme]);

  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.title}>Small Projects I've done</h1>
          {Info.map((info) => (
                <Card key={info.title} info={info} theme={props.theme} />
            ))}
        </div>
      </div>
    </>
  );
}
