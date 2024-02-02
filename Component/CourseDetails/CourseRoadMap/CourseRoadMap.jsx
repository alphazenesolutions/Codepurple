import React, { useEffect } from "react";
import styles from "./CourseRoadMap.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const CourseRoadMap = () => {
  gsap.registerPlugin(ScrollTrigger);
  let t1 = gsap.timeline({ paused: true, reversed: true });
  //   useEffect(() => {
  //     t1.play();

  //     t1.to(".CourseRoadMapBG_", {
  //       width: "5000px",
  //       height: "1000vh",
  //       scrollTrigger: {
  //         trigger: ".CourseRoadMapContainer_",
  //         scrub: 2,
  //       },
  //     });
  //   }, []);
  return (
    <div
      className={`${styles.CourseRoadMapContainer} CourseRoadMapContainer_ `}
    >
      <div className={`${styles.CourseRoadMapBG} CourseRoadMapBG_`}>
      
      </div>
    </div>
  );
};

export default CourseRoadMap;
