/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Projects.module.css";

const Projects = ({ projectdata }) => {
  return (
    <div className={`${styles.ProjectsContaienr} section-width`}>
      <div className={styles.courseExpandMainHeadContainer}>
        <h1>PROJECTS !</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Eaque
          est nostrum officiis quos facilis,
        </p>
      </div>
      {projectdata.length !== 0 ? (
        <div className={styles.Projects}>
          <section className={styles.Project1}>
            <h1>{projectdata[0].project1_title}</h1>
            <p className="">{projectdata[0].project1_des}</p>
          </section>
          <section className={styles.Project2}>
            <img src={projectdata[0].project2_icon} alt="" />
            <div>
              <h1>{projectdata[0].project2_title}</h1>
              <p>{projectdata[0].project2_des}</p>
            </div>
          </section>
          <section className={styles.Project3}>
            <h1>{projectdata[0].project3_title}</h1>

            <img src={projectdata[0].project3_icon} alt="" />
            <p>{projectdata[0].project3_des}</p>
          </section>
          <section className={styles.Project4}>
            <img src={projectdata[0].project4_icon} alt="" />
            <div>
              <h1>{projectdata[0].project4_title}</h1>
              <p>{projectdata[0].project4_des}</p>
            </div>
          </section>
          <section className={styles.Project5}>
            <h1>{projectdata[0].project5_title}</h1>
            <p>{projectdata[0].project5_des}</p>
          </section>
        </div>
      ) : (
        <div>
          <h6>No Project Available</h6>
        </div>
      )}
    </div>
  );
};

export default Projects;
