import React from "react";
import styles from "./CourseCover.module.css";
const CourseCover = () => {
  return (
    <div className={`${styles.CourseCoverBody} section-width`}>
      <div className={`${styles.CourseCover} `}>
        <img src="/Highlight.png" alt="" />
        <h1 className={styles.CourseCoverHeading_w}>
          Start Your <span className={styles.CourseCoverG}> Career</span> <br />{" "}
          
          Explore Endless Learning Opportunities with<span className={styles.CourseCoverP}> CodePurple</span>{" "} Today! 
        </h1>
        <h1 className={styles.CourseCoverHeading_m}>
          Start Your <span className={styles.CourseCoverG}> Career</span> <br />{" "}
          Lorem, ipsum. <span className={styles.CourseCoverP}>Courses</span>{" "}
          Lorem ipsum dolor sit . . . .
        </h1>
      </div>
      
    </div>
  );
};

export default CourseCover;
