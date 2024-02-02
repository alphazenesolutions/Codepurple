import React, { useEffect } from "react";
import styles from "./CourseExpand.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLocationArrow } from "react-icons/fa";

const CourseExpand = () => {
  gsap.registerPlugin(ScrollTrigger); //calling scroll trigger plugin

  useEffect(() => {
    // Main div is pinned

    const tl11 = gsap.timeline({
      scrollTrigger: {
        trigger: "#courseExpandDiv_",
        start: "-2%",
        end: "10% top",
        // markers: true,
        pin: "#courseExpandDiv_",
        scrub: 1,
      },
    });

    // extention1

    const tl12 = gsap.timeline({
      scrollTrigger: {
        trigger: "#courseExpandDiv_",
        start: "-2%",
        end: "10% top",
        // markers: true,
        //   pin: '.ExpandDiv_',
        scrub: 1,
      },
    });

    tl12.to("#flexCourseExpandOne_", { height: "120%" });

    const tl13 = gsap.timeline({
      scrollTrigger: {
        trigger: "#courseExpandDiv_",
        start: "-2%",
        // markers: true,
        end: "10% top",
        //   pin: '.ExpandDiv_',
        scrub: 1,
      },
    });

    tl13.to("#courseExpandOne_", { height: "100%" });
    //   tl13.to('.courseExpandOne_',{height: "0%"});

    //ease in

    const tl18 = gsap.timeline({
      scrollTrigger: {
        trigger: "#courseExpandDiv_",
        start: "-2%",
        // markers: true,
        end: "10% top",
        //   pin: '.ExpandDiv_',
        scrub: 1,
      },
    });

    tl18.fromTo("#ExOne_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });
    tl18.fromTo("#ExTwo_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });
    tl18.fromTo("#ExThree_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });
    tl18.fromTo("#ExFour_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });
    tl18.fromTo("#ExFive_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });

    // extention2

    const tl14 = gsap.timeline({
      scrollTrigger: {
        trigger: "#courseExpandDiv_",
        start: "25% top",
        end: "35% top",
        // markers: true,
        //   pin: '.ExpandDiv_',2
        scrub: 1,
      },
    });

    tl14.to("#flexCourseExpandTwo_", { height: "120%" });
    //   tl14.to('.flexCourseExpandTwo_',{height: "100px"});

    const tl15 = gsap.timeline({
      scrollTrigger: {
        trigger: "#courseExpandDiv_",
        start: "25% top",
        end: "35% top",
        // markers: true,
        //   pin: '.ExpandDiv_',
        scrub: 1,
      },
    });

    tl15.to("#courseExpandTwo_", { height: "100%" });
    //   tl15.to('.courseExpandTwo_',{height: "0%"});

    //ease in

    const tl19 = gsap.timeline({
      scrollTrigger: {
        trigger: "#courseExpandDiv_",
        start: "25% top",
        end: "35% top",
        // markers: true,
        //   pin: '.ExpandDiv_',
        scrub: 1,
      },
    });

    tl19.fromTo("#Cr2One_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });
    tl19.fromTo("#Cr2Two_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });
    tl19.fromTo(
      "#Cr2Three_",
      { x: -300, opacity: 0 },
      { x: "0px", opacity: 1 }
    );
    tl19.fromTo("#Cr2Four_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });
    tl19.fromTo("#Cr2Five_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });

    // extention3

    const tl16 = gsap.timeline({
      scrollTrigger: {
        trigger: "#courseExpandDiv_",
        start: "50% top",
        end: "60% top",
        // markers: true,
        //   pin: '.ExpandDiv_',
        scrub: 1,
      },
    });

    tl16.to("#flexCourseExpandThird_", { height: "120%" });

    const tl17 = gsap.timeline({
      scrollTrigger: {
        trigger: "#courseExpandDiv_",
        start: "50% top",
        end: "60% top",
        // markers: true,
        //   pin: '.ExpandDiv_',
        scrub: 1,
      },
    });

    tl17.to("#courseExpandThird_", { height: "100%" });

    //ease in

    const tl20 = gsap.timeline({
      scrollTrigger: {
        trigger: "#courseExpandDiv_",
        start: "50% top",
        end: "60% top",
        // markers: true,
        //   pin: '.ExpandDiv_',
        scrub: 1,
      },
    });

    tl20.fromTo("#Cr3One_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });
    tl20.fromTo("#Cr3Two_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });
    tl20.fromTo(
      "#Cr3Three_",
      { x: -300, opacity: 0 },
      { x: "0px", opacity: 1 }
    );
    tl20.fromTo("#Cr3Four_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });
    tl20.fromTo("#Cr3Five_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });

    return () => {
      tl11.kill();
      tl12.kill();
      tl13.kill();
      tl14.kill();
      tl15.kill();
      tl16.kill();
      tl17.kill();
      tl18.kill();
      tl19.kill();
      tl20.kill();
    };
  });

  return (
    <div
      id="courseExpandDiv_"
      className={`${styles.courseExpandMain} courseExpandDiv_ section-width`}
    >
      <div className={styles.courseExpandMainHeadContainer}>
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
      <div className={styles.courseExpandDesc}>
        <div
          id="flexCourseExpandOne_"
          className={`${styles.friendlyTraining} flexCourseExpandOne_`}
        >
          <div className={styles.friendlyHead}>
            <FaLocationArrow className={styles.courseExpandIcon} />

            <h1>Frontend Development</h1>
          </div>
          <div
            id="courseExpandOne_"
            className={`${styles.friendlyFlex} courseExpandOne_`}
          >
            <div className={styles.friendlyTrainingLeft}>
              <div className={styles.friendlyDesc}>
                <h5>
                  "As a human; I am flesh and blood; I can be ignored. But as a
                  symbol, I can be incorruptible."
                </h5>
                <li id={"ExOne_"}>
                  Understand how websites work and how HTML, CSS and JavaScript
                  contribute.
                </li>
                <li id={"ExTwo_"}>Understand how the internet works.</li>
                <li id={"ExThree_"}>Learn HTML tags & features of HTML5.</li>
                <li id={"ExFour_"}>
                  Learn the fundamentals of implementing responsive web design.
                </li>
                <li id={"ExFive_"}>
                  How to use bootstrap to create a web page.
                </li>
              </div>
            </div>
          </div>
        </div>
        <div
          id="courseExpandTwo_"
          className={`${styles.friendlyTraining} courseExpandTwo_`}
        >
          <div className={styles.friendlyHead}>
            <FaLocationArrow className={styles.courseExpandIcon} />

            <h1>Backend Development</h1>
          </div>
          <div
            id="flexCourseExpandTwo_"
            className={`${styles.friendlyFlex} flexCourseExpandTwo_`}
          >
            <div className={styles.friendlyTrainingLeft}>
              <div className={styles.friendlyDesc}>
                <h5>
                  "As a human; I am flesh and blood; I can be ignored. But as a
                  symbol, I can be incorruptible."
                </h5>

                <li id={"Cr2One_"}>
                  Understand how websites work and how HTML, CSS and JavaScript
                  contribute.
                </li>
                <li id={"Cr2Two_"}>Understand how the internet works.</li>
                <li id={"Cr2Three_"}>Learn HTML tags & features of HTML5.</li>
                <li id={"Cr2Four_"}>
                  Learn the fundamentals of implementing responsive web design.
                </li>
                <li id={"Cr2Five_"}>
                  How to use bootstrap to create a web page.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseExpand;
