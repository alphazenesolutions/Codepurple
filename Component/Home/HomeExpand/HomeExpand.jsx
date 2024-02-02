import React, { useEffect } from "react";
import styles from "./HomeExpand.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLocationArrow } from "react-icons/fa";

const HomeExpand = () => {
  gsap.registerPlugin(ScrollTrigger); //calling scroll trigger plugin

  useEffect(() => {
    // Main div is pinned

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#ExpandDiv_",
        start: "-5%",
        end: "20% top",
        pin: ".ExpandDiv_",
        scrub: 1,
      },
    });

    // extention1

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#ExpandDiv_",
        start: "-5%",
        end: "20% top",
        //   pin: '.ExpandDiv_',
        scrub: 1,
      },
    });

    tl2.to("#flexExpandOne_", { height: "400px" });
    //   tl2.to('.flexExpandOne_',{height: "100px"});

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ExpandDiv_",
        start: "-5%",

        end: "20% top",
        //   pin: '.ExpandDiv_',
        scrub: 1,
      },
    });

    tl3.to("#ExpandOne_", { height: "100%" });
    //   tl3.to('.ExpandOne_',{height: "0%"});

    //ease in

    const tl8 = gsap.timeline({
      scrollTrigger: {
        trigger: "#ExpandDiv_",
        start: "-5%",

        end: "20% top",
        //   pin: '.ExpandDiv_',
        scrub: 1,
      },
    });

    tl8.fromTo("#ExOne_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });
    tl8.fromTo("#ExTwo_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });
    tl8.fromTo("#ExThree_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });
    tl8.fromTo("#ExFour_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });
    tl8.fromTo("#ExFive_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });

    // extention2

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#ExpandDiv_",
        start: "20% top",
        end: "30% top",
        //   pin: '.ExpandDiv_',
        scrub: 1,
      },
    });

    tl4.to("#flexExpandTwo_", { height: "400px" });
    //   tl4.to('.flexExpandTwo_',{height: "100px"});

    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: "#ExpandDiv_",
        start: "20% top",
        end: "30% top",
        //   pin: '.ExpandDiv_',
        scrub: 1,
      },
    });

    tl5.to("#ExpandTwo_", { height: "100%" });
    //   tl5.to('.ExpandTwo_',{height: "0%"});

    //ease in

    const tl9 = gsap.timeline({
      scrollTrigger: {
        trigger: "#ExpandDiv_",
        start: "20% top",
        end: "30% top",
        //   pin: '.ExpandDiv_',
        scrub: 1,
      },
    });

    tl9.fromTo("#Ex2One_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });
    tl9.fromTo("#Ex2Two_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });
    tl9.fromTo("#Ex2Three_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });
    tl9.fromTo("#Ex2Four_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });
    tl9.fromTo("#Ex2Five_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });

    // extention3

    const tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: "#ExpandDiv_",
        start: "50% top",
        end: "60% top",
        //   pin: '.ExpandDiv_',
        scrub: 1,
      },
    });

    tl6.to("#flexExpandThird_", { height: "400px" });
    //   tl6.to('.flexExpandThird_',{height: "250px"});

    const tl7 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ExpandDiv_",
        start: "50% top",
        end: "60% top",
        //   pin: '.ExpandDiv_',
        scrub: 1,
      },
    });

    tl7.to("#ExpandThird_", { height: "100%" });
    //   tl7.to('.ExpandThird_',{height: "0%"});

    //ease in

    const tl10 = gsap.timeline({
      scrollTrigger: {
        trigger: "#ExpandDiv_",
        start: "50% top",
        end: "60% top",
        //   pin: '.ExpandDiv_',
        scrub: 1,
      },
    });

    tl10.fromTo("#Ex3One_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });
    tl10.fromTo("#Ex3Two_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });
    tl10.fromTo(
      "#Ex3Three_",
      { x: -300, opacity: 0 },
      { x: "0px", opacity: 1 }
    );
    tl10.fromTo("#Ex3Four_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });
    tl10.fromTo("#Ex3Five_", { x: -300, opacity: 0 }, { x: "0px", opacity: 1 });

    return () => {
      tl1.kill();
      tl2.kill();
      tl3.kill();
      tl4.kill();
      tl5.kill();
      tl6.kill();
      tl7.kill();
      tl8.kill();
      tl9.kill();
      tl10.kill();
    };
  });

  return (
    <div
      id="ExpandDiv_"
      className={`${styles.homeExpandMain} ExpandDiv_ section-width`}
    >
      <div className={styles.homeExpandMainHeadContainer}>
        <div className={styles.homeExpandMainHeadHeading}>
          <h1>Why Choose Us ?</h1>
          <img src="/Highlight.png" alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
            Eaque est nostrum officiis quos facilis,
          </p>
        </div>
        <p></p>
      </div>
      <div className={styles.expandDesc}>
        {/*=================== first expansion=================== */}
        <div
          id="flexExpandOne_"
          className={`${styles.friendlyTraining} flexExpandOne_`}
        >
          <div className={styles.friendlyHead}>
            <FaLocationArrow className={styles.homeExpandIcon} />
            <h1>150+ Happy students:</h1>
          </div>
          <div id="ExpandOne_" className={`${styles.friendlyFlex} ExpandOne_`}>
            <div className={styles.friendlyTrainingLeft}>
              <div className={styles.friendlyDesc}>
                <li id={"ExOne_"} className={styles.friendlyDesctext}>
                  Engaging learning environment leading to a high level
                  satisfaction
                </li>
                <li id={"ExTwo_"} className={styles.friendlyDesctext}>
                  Small class size for personalized attention
                </li>
                <li id={"ExThree_"} className={styles.friendlyDesctext}>
                  Active student support system for the wellbeing and success of
                  each student
                </li>
                {/* <p id={"ExFour_"}>Loren Ipsum</p>
                <p id={"ExFive_"}>Loren Ipsum</p> */}
              </div>
            </div>
            <div className={styles.friendlyTrainingRight}>
              <img src="./Techsupport.png" alt="" />
            </div>
          </div>
        </div>
        {/*=================== Second expansion=================== */}
        <div
          id="ExpandTwo_"
          className={`${styles.friendlyTraining} ExpandTwo_`}
        >
          <div className={styles.friendlyHead}>
            <FaLocationArrow className={styles.homeExpandIcon} />

            <h1>Developers as trainers</h1>
          </div>
          <div
            id="flexExpandTwo_"
            className={`${styles.friendlyFlex} flexExpandTwo_`}
          >
            <div className={styles.friendlyTrainingLeft}>
              <div className={styles.friendlyDesc}>
                <li id={"Ex2One_"} className={styles.friendlyDesctext}>
                  Acquire practical industry knowledge from trainers who are not
                  only educators but also industry professionals.
                </li>
                <li id={"Ex2Two_"} className={styles.friendlyDesctext}>
                  Experience hands-on learning with trainers to learn practical
                  application of concepts
                </li>
                <li id={"Ex2Three_"} className={styles.friendlyDesctext}>
                  Gain access to industry networks and potential mentorship to
                  enhance your overall experience.
                </li>
                {/* <p id={"Ex2Four_"}>Loren Ipsum</p>
                <p id={"Ex2Five_"}>Loren Ipsum</p> */}
              </div>
            </div>
            <div className={styles.friendlyTrainingRight}>
              <img src="./Techsupport.png" alt="" />
            </div>
          </div>
        </div>
        {/*=================== third expansion=================== */}
        <div
          id="ExpandThird_"
          className={`${styles.friendlyTraining} ExpandThird_`}
        >
          <div className={styles.friendlyHead}>
            <FaLocationArrow className={styles.homeExpandIcon} />

            <h1>Optimised Career Placement Service</h1>
          </div>
          <div
            id="flexExpandThird_"
            className={`${styles.friendlyFlex} flexExpandThird_`}
          >
            <div className={styles.friendlyTrainingLeft}>
              <div className={styles.friendlyDesc}>
                <li id={"Ex3One_"} className={styles.friendlyDesctext}>
                  Access exclusive internship opportunities facilitated by our
                  placement assistance team.
                </li>
                <li id={"Ex3Two_"} className={styles.friendlyDesctext}>
                  Prepare for job interviews with confidence through mock
                  interviews and resume workshops.
                </li>
                <li id={"Ex3Three_"} className={styles.friendlyDesctext}>
                  Benefit from our strong relationships with a diverse range of
                  employers, opening up a wide array of job opportunities.
                </li>
                {/* <p id={"Ex3Four_"}>Loren Ipsum</p>
                <p id={"Ex3Five_"}>Loren Ipsum</p> */}
              </div>
            </div>
            <div className={styles.friendlyTrainingRight}>
              <img src="./Techsupport.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeExpand;
