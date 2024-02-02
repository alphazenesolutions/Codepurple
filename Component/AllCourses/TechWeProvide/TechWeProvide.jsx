import React from "react";
import styles from "./TechWeProvide.module.css";
const TechWeProvide = () => {
  return (
    <div className={`${styles.TechWeProvideContainer} section-width`}>
      <div className={styles.TechWeProvideHeadContainer}>
        <div className={styles.TechWeProvideHeading}>
          <h1>Tech We Provide</h1>
          <img src="/Highlight.png" alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
            Eaque est nostrum officiis quos facilis,
          </p>
        </div>
        <p></p>
      </div>
      <div className={styles.TechContainer}>
        <img src="/1.png" alt="" />
        <img src="/2.png" alt="" />
        <img src="/5.png" alt="" />
        <img src="/3.png" alt="" />
        <img src="/4.png" alt="" />
        <img src="/5.png" alt="" />
        <img src="/6.png" alt="" />
        <img src="/7.png" alt="" />
        <img src="/8.png" alt="" />
        <img src="/8.png" alt="" />
        <img src="/9.png" alt="" />
        <img src="/10.png" alt="" />
      </div>
    </div>
  );
};

export default TechWeProvide;
