import {React, useEffect, useState} from "react";
import styles from "./card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {

  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle({
    card : (props.theme ? styles.cardDark : styles.cardLight),
    cardContent : (props.theme ? styles.cardContentDark : styles.cardContentLight),
    cardTextDiv : styles.cardTextDiv,
    cardContentTitle : styles.cardContentTitle,
    cardContentDescription : styles.cardContentDescription,
    cardTextLinks : (props.theme ? styles.cardTextLinksDark : styles.cardTextLinksLight),
  });
  }, [props.theme]);

  return (
    <>
      <div className={style.card}>
        <div className={style.cardContent}>
          <div className={style.cardTextDiv}>
            <h1 className={style.cardContentTitle}>{props.info.title}</h1>
            <p className={style.cardContentDescription}>
              {props.info.description}
            </p>
          </div>
          {(props.info.link || props.info.extLink) && (
            <div className={style.cardTextLinks}>
              {props.info.link && (
                <Link to={props.info.link} className={style.link}>
                  Take a look
                </Link>
              )}

              {props.info.extLink && (
                <a
                  href={props.info.extLink}
                  target="__blank"
                  className={styles.link}
                >
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
