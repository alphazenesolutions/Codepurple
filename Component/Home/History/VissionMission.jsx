import React, { useEffect, useRef } from "react";
import styles from "./VissionMission.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const VissionMission = () => {
  gsap.registerPlugin(ScrollTrigger);
  let tl = gsap.timeline({ paused: true, reversed: true });

  const triggerRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {
    var sections = [1, 2, 3];

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateY: 0,
      },
      {
        yPercent: -35 * (sections.length - 1),

        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 10%",
          scrub: 3,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);
  return (
    <div className={`${styles.History} wrapperH`}>
      <div
        ref={triggerRef}
        className={`${styles.webAbout} ${styles.wrapper1} history_content section-width`}
      >
        <div ref={sectionRef} className={styles.ourProductsContainer1}>
          <div className={styles.productContainer1}>
            <div></div>
            <div className={styles.Advantages}>
              <h1>Our Mission</h1>
              <p>
                We make learning tech easy for job seekers, giving them skills they need for digital jobs. Our
                courses get people ready for real work, boosting confidence for job hunting. We want to
                help close the gap between education and what jobs need, so people can do well in tech.

              </p>
            </div>
          </div>
          <div className={styles.productContainer1}>
            <div></div>
            <div className={styles.Advantages}>
              <h1> Our Vission</h1>
              <p>
                We dream of a world where everyone can learn and succeed in the digital era. Our aim is to
                help people gain the skills and confidence to thrive in a fast-changing tech world. By
                connecting education with job needs, we want to create a future where everyone can reach
                their goals.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.whatwedo}>
          <img
            className={styles.whatwedoimg}
            src="/vission.jpg"
            alt="whatwedo"
          />
          {/* <img className={styles.making} src="/course2.jpeg" alt="whatwedo" /> */}
        </div>
      </div>
    </div>
  );
};

export default VissionMission;
