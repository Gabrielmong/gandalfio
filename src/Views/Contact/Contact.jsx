import React from "react";
import "./contact.css";
import Github from "../../Assets/SVG/Github.svg";
import LinkedIn from "../../Assets/SVG/LinkedIn.svg";
import Facebook from "../../Assets/SVG/Facebook.svg";
import Instagram from "../../Assets/SVG/Instagram.svg";
import Twitter from "../../Assets/SVG/Twitter.svg";
import Mail from "../../Assets/SVG/Mail.svg";

export default function Contact() {
  return (
    <>
      <div className="container">
        <div className="content">
          <h1>Contact</h1>
          <p className="text">
            I think it's easy to contact me, you can email me at
            <a href="mailto:gabriel.monge.lizano@gmail.com"> my email</a> or you
            can find me on social media too.
          </p>
          <p className="text">
            There's my socials on the footer of the page, but still, here :D
          </p>

          <div className="socials">
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
            className="form"
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
