import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { ImSmile2 } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";
import styles from "./Footer.module.css";
import SocialMedia from "../Reusable/SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <div className={`${styles.footerContainer} `}>
      <div className={`${styles.footerContent} section-width`}>
        <div className={styles.footerL}>
          <h1>
            Code <br /> Purple
          </h1>
          <div className={styles.footerSubscribe}>
            <p>Subscribe to our newsleter</p>
            <div className={styles.footerSubscribeInput}>
              <input placeholder="Enter Your E-mail" />
              <FaArrowCircleRight className={styles.footerSubscribeInputIcon} />
            </div>
          </div>
          <p className={styles.footerdetails}>
            Commission-free investing,
            <br /> plus all tools that you need.
          </p>
        </div>
        <div className={styles.footerR}>
          <h1>How can we help you?</h1>
          <h1 className={styles.letsTalk}>Let’s talk.</h1>
          <div className={styles.footerContactContainer}>
            <div>
              <h3>Website map</h3>
              <div className={styles.footerContact}>
                <p>Themes</p>
                <p>Community</p>
                <p>Destinations</p>
                <p>Blog</p>
              </div>
            </div>
            <div>
              <h3>Contacts</h3>
              <div className={styles.footerContact}>
                <p>mail@halo-lab.com</p>
                <p>UA: +3 8096 272 2100</p>
                <p>www.halo-lab.com</p>
                <p>Ukraine, Odesa</p>
              </div>
            </div>
          </div>
          <div className={styles.footerSocialMedia}>
            <div className={styles.footerCopyRight}>
              <ImSmile2 className={styles.footerCopyRightIcon} />
              <div>
                <p>2022 halo lab</p>
                <p>© All rights reserved</p>
              </div>
            </div>

            <div className={styles.footerSocialMediaContainer}>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerTagLine}>
        <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <AiFillHeart className={styles.footerTagLineIcon} />
      </div>
    </div>
  );
};

export default Footer;
