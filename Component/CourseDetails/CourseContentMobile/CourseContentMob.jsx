/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./CourseContentMob.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CourseContentMob = ({ allmoduledata, syllabus }) => {
  const [isExpand, setisExpand] = useState(false);
  const [indexvalue, setindexvalue] = useState(null);

  const expandHandler = (index) => {
    setisExpand(true);
    setindexvalue(index);
  };
  const expandHandler1 = (index) => {
    setisExpand(false);
    setindexvalue(index);
  };
  const downloadbtn = () => {
    const fileUrl = syllabus;
    window.open(fileUrl, "_blank");
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
        {syllabus !== null ? (
          <div className={styles.syllabusContainer} onClick={downloadbtn}>
            <h1>
              Download <span>Syllabus</span>{" "}
            </h1>
            <img src="/syllabusHighlight.png" alt="" />
          </div>
        ) : null}
      </div>
      <div className={styles.whatYouWillLearnMobile}>
        {allmoduledata.length !== 0
          ? allmoduledata.map((data, index) => (
              <div className={styles.coruseContent} key={index}>
                <div className={styles.coruseContentHead}>
                  <h1>{data.title}</h1>
                  {indexvalue == index ? (
                    isExpand === true ? (
                      <IoIosArrowUp
                        onClick={() => {
                          expandHandler1(index);
                        }}
                        className={styles.coruseContentExpandIcon1}
                      />
                    ) : (
                      <IoIosArrowDown
                        onClick={() => {
                          expandHandler(index);
                        }}
                        className={styles.coruseContentExpandIcon1}
                      />
                    )
                  ) : (
                    <IoIosArrowDown
                      onClick={() => {
                        expandHandler(index);
                      }}
                      className={styles.coruseContentExpandIcon1}
                    />
                  )}
                </div>
                {isExpand && indexvalue == index ? (
                  <div className={styles.coruseContentDesc}>
                    <h5>
                      "As a human; I am flesh and blood; I can be ignored. But
                      as a symbol, I can be incorruptible."
                    </h5>
                    {data.lesson_data.length !== 0
                      ? data.lesson_data.map((datanew, i) => (
                          <li key={i}>{datanew.title}</li>
                        ))
                      : null}
                  </div>
                ) : null}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default CourseContentMob;
