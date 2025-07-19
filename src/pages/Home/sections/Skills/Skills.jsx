import React from "react";
import styles from "./Skills.module.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiPostman,
  SiGit,
  SiGithub,
} from "react-icons/si";

function Skills() {
  const techStack = [
    { icon: <SiHtml5 color="#E34F26" size={48} />, name: "HTML" },
    { icon: <SiCss3 color="#1572B6" size={48} />, name: "CSS" },
    { icon: <SiJavascript color="#F7DF1E" size={48} />, name: "JavaScript" },
    { icon: <SiReact color="#61DAFB" size={48} />, name: "React" },
    { icon: <SiRedux color="#764ABC" size={48} />, name: "Redux" },
    { icon: <SiNextdotjs color="#000000" size={48} />, name: "Next.js" },
    { icon: <SiExpress color="#000000" size={48} />, name: "Express" },
    { icon: <SiMongodb color="#47A248" size={48} />, name: "MongoDB" },
    { icon: <SiCplusplus color="#00599C" size={48} />, name: "C++" },
    { icon: <SiGit color="#F05032" size={48} />, name: "Git" },
    { icon: <SiGithub color="#181717" size={48} />, name: "GitHub" },
    { icon: <SiPostman color="#FF6C37" size={48} />, name: "Postman" },
  ];
  return (
    <>
      <div className={styles["skills-container"]}>
        <div className={styles["skills-content"]}>
          <p className={styles["sub-title"]}>What I Know?</p>
          <h2 className={styles["title"]}>My Skills</h2>
        </div>
        <div className={styles["skills-card"]}>
          {techStack.map((tech, i) => (
            <div className={styles["skill-icon"]} key={i}>
              {tech.icon}
              <h6 className={styles["card-title"]}>{tech.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
