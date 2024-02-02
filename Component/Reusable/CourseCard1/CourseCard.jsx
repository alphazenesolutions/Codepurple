import React, { useEffect } from "react";
import styles from "./CourseCard1.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

const CourseCard1 = (props) => {
  return (
    <div className={`${styles.CourseCardContainer1} ${props.className}`}>
      <img src={props.img} alt="course" />

      <div className={styles.CourseCardPadding1}>
        <h1 className={styles.CourseCardHead1}>{props.title}</h1>
        <p className={styles.CourseCardDesc1}>{props.desc}</p>
        <hr />
        <div className={styles.CoursePrice1}>
          <div>
            <h1>{props.actualPrice}/-</h1>
            <h1 className={styles.CoursePrice_1}>{props.offerPrice}/-</h1>
          </div>

          <FaArrowRightLong
            onClick={props.fun}
            className={styles.CoursePriceAction1}
          />
        </div>
        <hr />
        <div className={styles.courseDetails1}>
          <div className={styles.courseStudents1}>
            <h3>Students.</h3>
            <p>{props.totalStudents}k</p>
          </div>
          <div className={styles.courseLessons1}>
            <div className={styles.courseduration1}>
              <h3>{props.hours}</h3>
              <p>hours</p>
            </div>
            <div className={styles.courseModule1}>
              <h3>{props.module}</h3>
              <p>modules</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard1;
