import React from "react";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={`${styles.ProjectsContaienr} section-width`}>
      <div className={styles.courseExpandMainHeadContainer}>
        <h1>PROJECTS !</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Eaque
          est nostrum officiis quos facilis,
        </p>
      </div>
      <div className={styles.Projects}>
        <section className={styles.Project1}>
          <h1>Lorem, ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            maiores impedit possimus sunt. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Incidunt maiores impedit possimus
            sunt.
          </p>
        </section>
        <section className={styles.Project2}>
          <img src="/insta.png" alt="" />
          <div>
            <h1>Insta Clone</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              maiores impedit possimus sunt.
            </p>
          </div>
        </section>
        <section className={styles.Project3}>
          <h1>E-commerce</h1>
          <img src="/project2.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            maiores impedit possimus sunt.
          </p>
        </section>
        <section className={styles.Project4}>
          <img src="/Netflix.png" alt="" />
          <div>
            <h1>Netflix Clone</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              maiores impedit possimus sunt.
            </p>
          </div>
        </section>
        <section className={styles.Project5}>
          <h1>Lorem, ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            maiores impedit possimus sunt. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Incidunt maiores impedit possimus
            sunt.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Projects;
