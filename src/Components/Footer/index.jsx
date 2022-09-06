import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import Github from "../../Assets/SVG/Github.svg";
import LinkedIn from "../../Assets/SVG/LinkedIn.svg";
import Facebook from "../../Assets/SVG/Facebook.svg";
import Instagram from "../../Assets/SVG/Instagram.svg";
import Twitter from "../../Assets/SVG/Twitter.svg";
import Mail from "../../Assets/SVG/Mail.svg";

export default function Footer(props) {
  return (
    <footer className={props.theme ? styles.backFooterDark : styles.backFooterLight}>
      <div className={styles.footer}>
        <div className={styles.mainContent}>
          <p>
            Developed by <Link to="/about">Gabriel Monge</Link>
          </p>
        </div>
        <div className={styles.linksContent}>
          <a href="https://github.com/Gabrielmong/" target="__blank">
            <img src={Github} alt="Github" width={20} />
          </a>
          <a
            href="https://www.facebook.com/gabriel.mongelizano/"
            target="__blank"
          >
            <img src={Facebook} alt="Facebook" width={20} />
          </a>
          <a href="https://www.instagram.com/gabriel_mong/" target="__blank">
            <img src={Instagram} alt="Instragram" width={20} />
          </a>
          <a href="https://twitter.com/notgabriel_mong" target="__blank">
            <img src={Twitter} alt="Twitter" width={20} />
          </a>
          <a href="https://www.linkedin.com/in/gabrielmonge/" target="__blank">
            <img src={LinkedIn} alt="LinkedIn" width={20} />
          </a>
          <a href="mailto:gabriel.monge.lizano@gmail.com" target="__blank">
            <img src={Mail} alt="Mail" width={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
