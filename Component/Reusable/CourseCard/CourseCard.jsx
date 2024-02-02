import React, { useEffect } from "react";
import styles from "./CourseCard.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

const CourseCard = (props) => {
  return (
    <div className={`${styles.CourseCardContainer} ${props.className}`}>
      <img src={props.img} alt="course" />

      <div className={styles.CourseCardPadding}>
        <h1 className={styles.CourseCardHead}>{props.title}</h1>
        <p className={styles.CourseCardDesc}>{props.desc}</p>
        <hr className={styles.CourseCardHr} />
        <div className={styles.CoursePrice}>
          <div>
            <h1>{props.actualPrice}/-</h1>
            <h1 className={styles.CoursePrice_}>{props.offerPrice}/-</h1>
          </div>

          <FaArrowRightLong
            onClick={props.fun}
            className={styles.CoursePriceAction}
          />
        </div>
        <hr className={styles.CourseCardHr} />
        <div className={styles.courseDetails}>
          <div className={styles.courseStudents}>
            <h3>Students.</h3>
            <p>{props.totalStudents}k</p>
          </div>
          <div className={styles.courseLessons}>
            <div className={styles.courseduration}>
              <h3>{props.hours}</h3>
              <p>hours</p>
            </div>
            <div className={styles.courseModule}>
              <h3>{props.module}</h3>
              <p>modules</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
