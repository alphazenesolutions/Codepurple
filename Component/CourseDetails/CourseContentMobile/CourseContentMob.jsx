import React, { useState } from "react";
import styles from "./CourseContentMob.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CourseContentMob = () => {
  // expandHandler
  const [isExpand, setisExpand] = useState(false);
  const expandHandler = () => {
    setisExpand(!isExpand);
  };

  return (
    <div className=" section-width">
      <div className={`${styles.courseExpandMainHeadContainer}`}>
        <div className={styles.courseExpandMainHeadHeading}>
          <h1>WHAT YOU WILL LEARN ?</h1>
          <img src="/Highlight.png" alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
            Eaque est nostrum officiis quos facilis,
          </p>
        </div>
        <div className={styles.syllabusContainer}>
          <h1>
            Download <span>Syllabus</span>{" "}
          </h1>
          <img src="/syllabusHighlight.png" alt="" />
        </div>
      </div>
      {/*courseExpandDesc -   */}
      <div className={styles.whatYouWillLearnMobile}>
        <div className={styles.coruseContent}>
          <div className={styles.coruseContentHead}>
            <h1>Frontend Development</h1>

            {!isExpand && (
              <IoIosArrowDown
                onClick={expandHandler}
                className={styles.coruseContentExpandIcon}
              />
            )}
            {isExpand && (
              <IoIosArrowUp
                onClick={expandHandler}
                className={styles.coruseContentExpandIcon}
              />
            )}
          </div>
          {isExpand && (
            <div className={styles.coruseContentDesc}>
              <h5>
                "As a human; I am flesh and blood; I can be ignored. But as a
                symbol, I can be incorruptible."
              </h5>
              <li>
                Understand how websites work and how HTML, CSS and JavaScript
                contribute.
              </li>
              <li>Understand how the internet works.</li>
              <li>Learn HTML tags & features of HTML5.</li>
              <li>
                Learn the fundamentals of implementing responsive web design.
              </li>
              <li>How to use bootstrap to create a web page.</li>
            </div>
          )}
        </div>
        <div className={styles.coruseContent}>
          <div className={styles.coruseContentHead}>
            <h1>Frontend Development</h1>

            {!isExpand && (
              <IoIosArrowDown
                onClick={expandHandler}
                className={styles.coruseContentExpandIcon}
              />
            )}
            {isExpand && (
              <IoIosArrowUp
                onClick={expandHandler}
                className={styles.coruseContentExpandIcon}
              />
            )}
          </div>
          {isExpand && (
            <div className={styles.coruseContentDesc}>
              <h5>
                "As a human; I am flesh and blood; I can be ignored. But as a
                symbol, I can be incorruptible."
              </h5>
              <li>
                Understand how websites work and how HTML, CSS and JavaScript
                contribute.
              </li>
              <li>Understand how the internet works.</li>
              <li>Learn HTML tags & features of HTML5.</li>
              <li>
                Learn the fundamentals of implementing responsive web design.
              </li>
              <li>How to use bootstrap to create a web page.</li>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseContentMob;
