/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./TechWeProvide.module.css";
const TechWeProvide = ({ techdata }) => {
  return (
    <>
      {techdata !== null ? (
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
            {techdata && JSON.parse(techdata).length !== 0 ? (
              JSON.parse(techdata).map((data, index) => (
                <img src={data} alt="" key={index} />
              ))
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TechWeProvide;
