import { React, useEffect, useState } from "react";
import styles from "./curriculum.module.css";
import Mail from "../../Assets/SVG/Mail.svg";
import LinkedIn from "../../Assets/SVG/LinkedIn.svg";
import Location from "../../Assets/SVG/Location.svg";
import Phone from "../../Assets/SVG/Phone.svg";

export default function Curriculum(props) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle({
      container: props.theme ? styles.containerDark : styles.containerLight,
      content: props.theme ? styles.contentDark : styles.contentLight,
      title: props.theme ? styles.titleDark : styles.titleLight,
      headDescription: props.theme
        ? styles.headDescriptionDark
        : styles.headDescriptionLight,
      link: props.theme ? styles.linkDark : styles.linkLight,
    });
  }, [props.theme]);

  const skills = [
    "Microsoft Office",
    "Computer Hardware Installation",
    "Virtual Networking",
    "Python",
    "Java",
    "HTML",
    "JavaScript",
    "React.js",
    "CSS",
    "SQL",
    "GIT",
    "Creativity",
    "Communication",
    "Decision-Making",
    "Node.js",
    "React Native",
    "C#",
    ".NET",
    "Computer Hardware/Software & Troubleshooting",
  ];

  const hobbies = [
    "Photography",
    "Weightlifting",
    "Guitar Playing",
    "Videogames"
  ];

  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={styles.document}>
            <div className={styles.documentHeader}>
              <h1 className={styles.headerTitle}>Gabriel Monge</h1>
              <h2 className={styles.headerSubtitle}>
                Junior Software Developer
              </h2>
              <h3 className={styles.headerDescription}>
                Self-motivated and detail-oriented, Computer Systems Engineering
                student.
              </h3>
            </div>
            <div className={styles.headerContactInfo}>
              <div className={styles.contactInfoItem}>
                <img src={Mail} alt="Mail" height={20} />
                <div className={styles.contactInfoText}>
                  gabriel.monge.lizano@gmail.com
                </div>
              </div>
              <div className={styles.contactInfoItem}>
                <img src={Phone} alt="Mail" height={20} />
                <div className={styles.contactInfoText}>+506 86837078</div>
              </div>
              <div className={styles.contactInfoItem}>
                <img src={Location} alt="Mail" height={20} />
                <div className={styles.contactInfoText}>San José</div>
              </div>
              <div className={styles.contactInfoItem}>
                <img src={LinkedIn} alt="Mail" height={20} />
                <div className={styles.contactInfoText}>
                  linkedin.com/in/GabrielMonge
                </div>
              </div>
            </div>
            <div className={styles.documentContent}>

              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>Education</h2>
                <div className={styles.sectionBody}>
                  <h3 className={styles.sectionPrimaryText}>
                    Computer Systems Engineering
                  </h3>
                  <h4 className={styles.sectionSecondaryText}>
                    Universidad Fidélitas
                  </h4>
                  <div className={styles.sectionLowerText}>
                    <p> 01/2021 - Present</p>
                    <p> San José, Costa Rica</p>
                  </div>
                </div>

                <div className={styles.sectionBody}>
                  <h3 className={styles.sectionPrimaryText}>
                    Scrum Fundamentals Certified (SFC)
                  </h3>
                  <h4 className={styles.sectionSecondaryText}>SCRUMstudy</h4>
                  <div className={styles.sectionLowerText}>
                    <p> 11/2021 - 12/2021 </p>
                    <p> San José, Costa Rica</p>
                  </div>
                </div>

                <div className={styles.sectionBody}>
                  <h3 className={styles.sectionPrimaryText}>
                    CISCO Certified Network Associate Academy
                  </h3>
                  <h4 className={styles.sectionSecondaryText}>
                    Academia de tecnología UCR
                  </h4>
                  <div className={styles.sectionLowerText}>
                    <p> 02/2020 - 09/2020 </p>
                    <p> San José, Costa Rica </p>
                  </div>
                  <div className={styles.modules}>
                    <p>Courses</p>
                    <div className={styles.listContainer}>
                      <ul className={styles.modulesList}>
                        <li className={styles.modulesItem}>Module I</li>
                        <li className={styles.modulesItem}>Module II</li>
                        <li className={styles.modulesItem}>Module III</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              

              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>Work Experience</h2>
                
                <div className={styles.sectionBody}>
                  <h3 className={styles.sectionPrimaryText}>
                    Junior Software Developer
                  </h3>
                  <h4 className={styles.sectionSecondaryText}>
                    Tiims Revolution
                  </h4>
                  <div className={styles.sectionLowerText}>
                    <p> 07/2022 - Present </p>
                    <p> Heredia, Costa Rica </p>
                  </div>
                  <div className={styles.modules}>
                    <p>Achievments/Tasks</p>
                    <div className={styles.listContainer}>
                      <ul className={styles.modulesList}>
                        <li className={styles.modulesItem}>Maintaining and developing codebases.</li>
                        <li className={styles.modulesItem}>Troubleshoot, debug and fix code.</li>
                        <li className={styles.modulesItem}>Create documentation for reference and reporting.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={styles.sectionBody}>
                  <h3 className={styles.sectionPrimaryText}>
                    Waiter/Bartender
                  </h3>
                  <h4 className={styles.sectionSecondaryText}>
                    Garden Bistro
                  </h4>
                  <div className={styles.sectionLowerText}>
                    <p> 10/2021 - 06/2022 </p>
                    <p> Heredia, Costa Rica </p>
                  </div>
                  <div className={styles.modules}>
                    <p>Achievments/Tasks</p>
                    <div className={styles.listContainer}>
                      <ul className={styles.modulesList}>
                        <li className={styles.modulesItem}>Maintaining a high standard with beverages and customer service under pressure.</li>
                        <li className={styles.modulesItem}>Greeting, seating and servicing customers.</li>
                        <li className={styles.modulesItem}>Working as a team with other waiters/waitresses.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                
                
              </div>

              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>Skills</h2>
                <div className={styles.skillContainer}>
                  {skills.map((skill) => (
                    <p className={styles.skillBox}>
                      {skill}
                    </p>
                  ))}
                </div>
              </div>

              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>Languages</h2>
                <div className={styles.languagesContainer}>
                  <div className={styles.language}>
                    <p className={styles.languageTitle}>English</p>
                    <p className={styles.languageText}>Full Professional Proficiency</p>
                  </div>
                  <div className={styles.language}>
                    <p className={styles.languageTitle}>Spanish</p>
                    <p className={styles.languageText}>Native or Bilingual Proficiency</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>Hobbies & Interests</h2>
                <div className={styles.skillContainer}>
                  {hobbies.map((hobby) => (
                    <p className={styles.hobbyBox}>
                      {hobby}
                    </p>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
