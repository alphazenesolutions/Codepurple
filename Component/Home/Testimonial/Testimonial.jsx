import React from "react";
import styles from "./Testimonial.module.css";
import { FaStar } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className={styles.testimonialBody}>
      <div className={`section-width ${styles.Testimonial}`}>
        <div className={styles.testimonialHomeHeadContainer}>
          <div className={styles.testimonialHomeHeadHeading}>
            <h1>Learners Love Us</h1>
            <img src="/Highlight.png" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
              Eaque est nostrum officiis quos facilis,
            </p>
          </div>
          <p></p>
        </div>
        <div className={` ${styles.TestimonialContainer}`}>
          <section className={styles.tDiv1}>
            <img src="/testi1.png" alt="" />
            <div className={styles.tdiv1Content}>
              <h1>Dianne Russell</h1>
              <div>
                {" "}
                <FaStar className={styles.tStars} />
                <FaStar className={styles.tStars} />
                <FaStar className={styles.tStars} />
                <FaStar className={styles.tStars} />
                <FaStar className={styles.tStars} />
              </div>
              <p>
                My child has improved a lot after finishing school. Thank you
                very much EduduMy child has improved a lot after finishing
                school. Thank you.
              </p>
            </div>
          </section>
          <section className={styles.testimonial_}>
            <img className={styles.testimonial_img} src="/review.png" alt="" />
            <h3>Dianne Russell</h3>
            <div>
              <FaStar className={styles.tStars} />
              <FaStar className={styles.tStars} />
              <FaStar className={styles.tStars} />
              <FaStar className={styles.tStars} />
              <FaStar className={styles.tStars} />
            </div>
            <p>
              My child has improved a lot after finishing school. Thank you very
              much EduduThank you very much.
            </p>
          </section>
          <section className={styles.tDiv3}>
            <img src="/testi1.png" alt="" />
            <div className={styles.tDiv3Head}>
              <p>Dianne Russell</p>
              <div>
                <FaStar className={styles.tStars} />
                <FaStar className={styles.tStars} />
                <FaStar className={styles.tStars} />
                <FaStar className={styles.tStars} />
                <FaStar className={styles.tStars} />
              </div>
            </div>
            <FaPlayCircle className={styles.tDiv3Icon} />
          </section>
          <section className={styles.testimonial_}>
            <img className={styles.testimonial_img} src="/review.png" alt="" />
            <h3>Dianne Russell</h3>
            <div>
              <FaStar className={styles.tStars} />
              <FaStar className={styles.tStars} />
              <FaStar className={styles.tStars} />
              <FaStar className={styles.tStars} />
              <FaStar className={styles.tStars} />
            </div>
            <p>
              My child has improved a lot after finishing school. Thank you very
              much EduduThank you very much.
            </p>
          </section>
          <section className={styles.testimonial__}>
            <h2>Dianne Russell</h2>
            <h1>
              One on One Discussion My child has you very much My child has you
              very .
            </h1>
          </section>
          <section className={styles.tDiv6}>
            <div>
              <img src="/testi2.png" alt="" />
              <div className={styles.tDiv6Content}>
                <h1>Dianne Russell</h1>
                <p>
                  "As a human; I am flesh and blood; I can be ignored. But as a
                  symbol, I can be incorruptible. I can be"
                </p>
              </div>
            </div>
          </section>
          <section className={styles.tDiv7}>
            <h2>Dianne Russell</h2>
            <h1>
              One on One DiscussionMy child has improved a lot after finishing
              school. Thank you very much EduduThank you very much.
            </h1>
          </section>
          <section className={styles.testimonial__}>
            <h2>Dianne Russell</h2>
            <h1>
              One on One Discussion My child has you very much My child has you
              very .
            </h1>
          </section>
        </div>
      </div>
      <img className={styles.smileImg} src="/smile.png" alt="" />
    </div>
  );
};

export default Testimonial;
