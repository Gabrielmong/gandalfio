import {React, useState, useEffect} from "react";
import styles from "./about.module.css";

export default function About(props) {

  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle({
      container: (props.theme ? styles.containerDark : styles.containerLight),
      content : (props.theme ? styles.contentDark : styles.contentLight),
      title : (props.theme ? styles.titleDark : styles.titleLight),
      text : (props.theme ? styles.textDark : styles.textLight),
      link : (props.theme ? styles.linkDark : styles.linkLight),
    });
  }, [props.theme]);

  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.title}>About me</h1>
          <p className={style.text}>
            I'm a software developer constantly trying to get better, studying
            computer science at
            <a
              className={style.link}
              href="https://www.linkedin.com/school/ufidelitas/"
              target="__blank"
            >
              {" "}
              Universidad Fidélitas{" "}
            </a>
            and constantly taking courses on Pirple, Udemy, Scrimba,
            FreeCodeCamp, trying to make use of the knowledge I have in personal
            projects, university projects, and actual work.
          </p>
          <p className={style.text}>
            I've always had a fascination for computers in general, since I was
            like a really young kid, I used to play around with my dad's
            computer, installing random stuff, and playing games. For some
            reason I was the designated computer kid at my school, was asked for
            help with anything computer related. At 13 I built my first
            computer, and had some interest in how it works, and how it could be
            used, so i started learing about components, operating systems,
            programming languages, weird useful programs and stuff like that.
          </p>
          <p className={style.text}>
            Started learning to code in my last year of highschool, played
            around with python, it seemed so cool to just program stuff, and it
            wasnt that hard at the start. The year after I got out of
            highschool, I took CCNA, it gave a better understanding of how
            computers communicate, but still wasn't my thing. On my first year
            of college, I had a course introductory to python, pretty cool, I
            loved it, so i started practicing more and more, building my own
            projects, just to later forget them or delete them.
          </p>
          <p className={style.text}>
            Later on I learned some Java, kinda like it, but not really, it's
            still pretty good i guess, sometimes it just gets tedious, i do hate
            Netbeans, i daily drive VS Code, learned Arduino Programming
            Language, it's basically C++ but I still can't say i know C++, it
            like, not that much that i know. Took some courses for databases
            too, learning MySQL and Oracle, I have mixed feelings about Oracle
            though.
          </p>
          <p className={style.text}>
            Later we started with web development, I learned HTML, CSS, and MVC
            with Java, I think we used SpringBoot and Thymeleaf, out team added
            some JavaScript just to spice it up, and ended up really enjoying
            web development.
          </p>
          <p className={style.text}>
            I then got a job as a Junior software developer at
            <a className={style.link} href="https://github.com/Tiims-Revolution"> Tiims Revolution</a>,
            with two friends, and I get to learn a lot and have time to study.
          </p>
          <p className={style.text}>
            I really like dogs, and gym stuff, I also like to play video games,
            a lot, some music too, like Metal, and listen mainly to Opeth,
            Tool, Amon Amarth,{" "}
            <a
              className={style.link}
              href="https://open.spotify.com/user/12166594253?si=d393e3e0699d44b9"
              target="__blank"
            >
              {" "}
              here is my Spotify profile.
            </a>
          </p>
          <p className={style.text}>Here's my favorite song too, if anyone actually cares lol.</p>
          <iframe
            className="music"
            src="https://open.spotify.com/embed/track/1ltBhiP2wDvuxkkAfvZvkJ?utm_source=generator&theme=0"
            width="80%"
            height="80px"
            frameBorder="0"
            title="Spotify"
            allow="encrypted-media;clipboard-write;fullscreen;picture-in-picture"
          ></iframe>
          <p className={style.text}>And thats Gabriel :D</p>
        </div>
      </div>
    </>
  );
}
