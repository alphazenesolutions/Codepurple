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
                When you prepare your own meals, you have control over the
                ingredients you use. You can choose fresh, high-quality
                ingredients and avoid additives, preservatives, and unhealthy
                additives that are often found in processed foods and restaurant
                meals. This gives you the ability to make healthier choices,
                control portion sizes, and cater to specific dietary needs.
              </p>
            </div>
          </div>
          <div className={styles.productContainer1}>
            <div></div>
            <div className={styles.Advantages}>
              <h1> Our Vission</h1>
              <p>
                One of the challenges with eating out is the tendency for larger
                portion sizes, which can contribute to overeating. Cooking at
                home allows you to control portion sizes and be mindful of your
                calorie intake. This can be particularly beneficial for weight
                management and maintaining a balanced diet.
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
