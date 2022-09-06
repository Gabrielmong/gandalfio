import {React, useEffect, useState} from "react";
import Info from "../../Assets/Data/dataHome.js";
import Card from "../../Components/Generic/Card";
import styles from "./home.module.css";

export default function Home(props) {

  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle({
    container : (props.theme ? styles.containerDark : styles.containerLight),
    content : (props.theme ? styles.contentDark : styles.contentLight),
    title : (props.theme ? styles.titleDark : styles.titleLight),
    headDescription : (props.theme ? styles.headDescriptionDark : styles.headDescriptionLight),
    link : (props.theme ? styles.linkDark : styles.linkLight),
  });
  }, [props.theme]);

  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.title}>Home Page</h1>
          <p className={style.headDescription}>
            I just built this in like a couple of hours because i wanted a portfolio kinda website</p>
          <p>
            So yeah, this is what i can kinda do at this point.
          </p>
          <a className={style.link} href="https://youtu.be/dQw4w9WgXcQ" target="__blank">Click me, like, please</a>
          {Info.map((info) => (
                <Card key={info.title} info={info} theme={props.theme}/>
            ))}
        </div>
      </div>
    </>
  );
}
