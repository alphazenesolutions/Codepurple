/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useState } from "react";
import styles from "./Cover.module.css";
import { FaPlayCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { CodePurpleAction } from "@/Store/Store";
import moment from "moment";

const Cover = ({
  coursename,
  coursedescription,
  duration,
  modulecount,
  lessoncount,
  batch,
}) => {
  const dispatch = useDispatch();
  const introVideoHandler = () => {
    new Audio("/mouseClick1.mp3").play();
  };
  const enrollHandler = () => {
    dispatch(CodePurpleAction.bookHandler());
  };

  return (
    <div className={`${styles.c_CoverContainer} section-width`}>
      <section className={styles.c_coverL}>
        <h1>{coursename}</h1>
        <ul className={styles.courseKeyHighlights}>
          <li>100% Job Placement Support</li>
          <li>Friendly Training</li>
          <li>One on One Discussion </li>
          <li>Real-World Projects</li>
          <li>Lorem Ipsum </li>
        </ul>
        <section className={styles.courseStudentsContainer}>
          <img src="/cap.png" alt="" />
          <p>
            <span>34,290 Students</span> already enrolled <br />
            and they love it.
          </p>
          <p className={styles.courseCountMobile}>
            <span>34,290 Students</span> already enrolled and they love it.
          </p>
        </section>
      </section>
      <section className={styles.c_coverR}>
        <p className={styles.courseQuotes}>{coursedescription}</p>
        {/* <button onClick={enrollHandler} className={styles.CourseEnrollNow}>
          ENROLL NOW !
        </button> */}
        <section className={styles.courseDetailsContainer}>
          <section className={styles.courseContentContainer}>
            <section className={styles.courseContent}>
              <h1>{duration} </h1>
              <p>hrs</p>
            </section>
            <section className={styles.courseContent}>
              <h1>{modulecount} </h1>
              <p>modules</p>
            </section>
            <section className={styles.courseContent}>
              <h1>{lessoncount} </h1>
              <p>lessons</p>
            </section>
          </section>
          <section className={styles.courseIntroVideo}>
            <img src="/courseintro.png" alt="" />
            <FaPlayCircle onClick={introVideoHandler} className={styles.play} />
          </section>
          <section className={styles.nextBatchContainer}>
            <h1>
              Next Batch on{" "}
              {batch !== null ? (
                <span> {moment(batch).format("MMM DD, YYYY")}</span>
              ) : null}
            </h1>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Cover;
