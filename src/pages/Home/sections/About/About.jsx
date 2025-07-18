import React from "react";
import styles from "./About.module.css";
import imgPerson from "../../../../assets/man.png"

function About() {
  return (
    <>
      <div className={styles["about-container"]}>
        <div className={styles["about-img-holder"]}>
          <img
            src={imgPerson} alt="person"
          />
        </div>
        <div className={styles["section"]}>
          <p className={styles["section-subtitle"]}>Who I Am?</p>
          <h2 className={styles["section-heading"]}>About Me</h2>
          <p>
            Hey, I am Navnit. I’m the kind of person who can’t just accept
            things on the surface. I need to go deep and truly understand how
            and why something works. Whether it’s a new piece of tech or a
            simple concept, I don’t feel comfortable until I’ve figured out the
            fundamentals. I learn by making sense of things, not by memorizing
            them. I ask a lot of questions like “Why am I learning this?”,
            “Where is it used in real life?”, “Why did someone even build this?”
            That mindset keeps me curious and makes learning exciting. Even if
            it takes a little longer, I know it sticks better. Since I’m working
            toward becoming an engineer, I try to think like one too. I enjoy
            breaking down how systems work, understanding what problems they
            solve, and how they improve real lives. For me, code isn’t just
            code. It’s a tool for solving real problems. Outside of all this, I
            love playing chess. It helps me stay sharp, patient, and strategic.
            I also really like animals. Right now, I’m focused on growing in
            software development and looking for opportunities where I can keep
            learning, building, and asking better questions.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
