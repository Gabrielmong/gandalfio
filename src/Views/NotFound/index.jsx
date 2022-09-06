import { React, useEffect, useState } from "react";
import styles from "./notfound.module.css";

export default function NotFound(props) {

  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle({
      container: props.theme ? styles.containerDark : styles.containerLight,
      content: styles.content,
      title: props.theme ? styles.titleDark : styles.titleLight,
    });
  }, [props.theme]);

  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.title}>Nothing here for now</h1>
        </div>
      </div>
    </>
  );
}
