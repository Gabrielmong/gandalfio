import {React, useState, useEffect} from "react";
import styles from "./contact.module.css";
import Github from "../../Assets/SVG/Github.svg";
import LinkedIn from "../../Assets/SVG/LinkedIn.svg";
import Facebook from "../../Assets/SVG/Facebook.svg";
import Instagram from "../../Assets/SVG/Instagram.svg";
import Twitter from "../../Assets/SVG/Twitter.svg";
import Mail from "../../Assets/SVG/Mail.svg";

export default function Contact(props) {

  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle({
      container: (props.theme ? styles.containerDark : styles.containerLight),
      content : (props.theme ? styles.contentDark : styles.contentLight),
      text : (props.theme ? styles.textDark : styles.textLight),
      link : (props.theme ? styles.linkDark : styles.linkLight),
      socials : styles.socials,
      form : styles.form,
      title : (props.theme ? styles.titleDark : styles.titleLight),
    });
  }, [props.theme]);

  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.title}>Contact</h1>
          <p className={style.text}>
            I think it's easy to contact me, you can email me at
            <a className={style.link} href="mailto:gabriel.monge.lizano@gmail.com"> my email</a> or you
            can find me on social media too.
          </p>
          <p className={style.text}>
            There's my socials on the footer of the page, but still, here :D
          </p>

          <div className={style.socials}>
            <a href="https://github.com/Gabrielmong/" target="__blank">
              <img src={Github} alt="Github" width={25} />
            </a>
            <a
              href="https://www.facebook.com/gabriel.mongelizano/"
              target="__blank"
            >
              <img src={Facebook} alt="Facebook" width={25} />
            </a>
            <a href="https://www.instagram.com/gabriel_mong/" target="__blank">
              <img src={Instagram} alt="Instragram" width={25} />
            </a>
            <a href="https://twitter.com/notgabriel_mong" target="__blank">
              <img src={Twitter} alt="Twitter" width={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/gabrielmonge/"
              target="__blank"
            >
              <img src={LinkedIn} alt="LinkedIn" width={25} />
            </a>
            <a href="mailto:gabriel.monge.lizano@gmail.com" target="__blank">
              <img src={Mail} alt="Mail" width={25} />
            </a>
          </div>
          <iframe
            className={style.form}
            src="https://docs.google.com/forms/d/e/1FAIpQLSdLyJYl4Lt-a3uh3VoevjsRTAaz_JQfMQCJ4df-iANlGX8jcw/viewform?embedded=true"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Contact Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </>
  );
}
