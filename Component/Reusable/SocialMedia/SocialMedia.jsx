import React from "react";
import styles from "./SocialMedia.module.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const SocialMedia = (props) => {
  return (
    <div style={{ flexDirection: props.direction }}>
      <FaFacebookSquare className={styles.mediaIcons} />
      <FaInstagramSquare className={styles.mediaIcons} />
      <FaYoutube className={styles.mediaIcons} />
      <FaLinkedin className={styles.mediaIcons} />
    </div>
  );
};

export default SocialMedia;
