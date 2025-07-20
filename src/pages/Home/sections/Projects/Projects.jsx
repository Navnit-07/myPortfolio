import React from "react";
import styles from "./Projects.module.css";
import Card from "../../../../components/Card/Card";
import project1 from "../../../../assets/projectImage/project1.jpg";
import project2 from "../../../../assets/projectImage/project2.jpg";
import project3 from "../../../../assets/projectImage/project3.jpg";
import project4 from "../../../../assets/projectImage/project4.jpg";
import project5 from "../../../../assets/projectImage/project5.jpg";
import project6 from "../../../../assets/projectImage/project6.jpg";

function Projects() {
  const projects = [
    {
      id: 1,
      image: project1,
      cardTitle: "Campus Navigation System",
      cardDescription:
        "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
    },
    {
      id: 2,
      image: project2,
      cardTitle: "MedCrypta",
      cardDescription:
        "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
    },
    {
      id: 3,
      image: project3,
      cardTitle: "Focus On Today",
      cardDescription:
        "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
    },
    {
      id: 4,
      image: project4,
      cardTitle: "Recipe Blog",
      cardDescription:
        "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
    },
    {
      id: 5,
      image: project5,
      cardTitle: "Jerry Escapes (Game)",
      cardDescription:
        "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
    },
    {
      id: 6,
      image: project6,
      cardTitle: "School Website",
      cardDescription:
        "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
    },
  ];

  return (
    <>
      <div className={styles["project-content"]}>
        <p className={styles["sub-title"]}>What I Did ?</p>
        <h2 className={styles["title"]}>My Projects</h2>
      </div>
      <div className={`${styles["project-container"]} grid gap-8 sm:grid-cols-2 lg:grid-cols-3`}>
        {projects.map((project) => {
          return (
            <Card
              key={project.id}
              image={project.image}
              CardTitle={project.cardTitle}
              CardDescription={project.cardDescription}
              Button="View Details"
            />
          );
        })}
      </div>
    </>
  );
}

export default Projects;
