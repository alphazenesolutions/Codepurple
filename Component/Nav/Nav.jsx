/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./Nav.module.css";
// import { TiThMenu } from "react-icons/ti";
import "animate.css";
// import { BeakerIcon } from "@heroicons/react/24/solid";
import useSound from "use-sound";
import { CodePurpleAction } from "@/Store/Store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SocialMedia from "../Reusable/SocialMedia/SocialMedia";
import { createContactuser } from "../Api/contactuser";

const Nav = () => {
  const [play] = useSound("/mouseClick1.mp3");

  // dispatch
  const dispatch = useDispatch();

  // sideBarHandler
  const sideBarHandler = () => {
    new Audio("/mouseClick1.mp3").play();
    dispatch(CodePurpleAction.sideNavHandler());
  };

  // contact
  var isContact = useSelector((store) => {
    return store.isContact;
  });

  // contact handler
  const ContactHandler = () => {
    if (isContact) {
      document.getElementById("Contact").classList.add("animate__fadeOutDown");
      document.getElementById("overLay_").classList.add("animate__fadeOut");
      setTimeout(() => {
        dispatch(CodePurpleAction.contactHandler());
      }, 500);
    } else {
      dispatch(CodePurpleAction.contactHandler());
    }
    setlabeldata(false);
  };

  // navHandler
  const [page, setpage] = useState("");
  const getPage = () => {
    var str = window.location.href;
    var part = str.split("//").pop().split("/")[1];
    setpage(part);
  };
  useEffect(() => {
    getPage();
  }, []);
  const navHandler = (e) => {
    if (page == e.target.id) {
      return;
    } else {
      window.location.replace(`/${e.target.id}`);
    }
  };
  // bookHandler
  const bookHandler = () => {
    dispatch(CodePurpleAction.bookHandler());
  };

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [disable, setdisable] = useState(false);
  const [labeldata, setlabeldata] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata((values) => ({ ...values, [name]: value }));
  };
  const bookbtn = async () => {
    setdisable(true);
    var createdata = await createContactuser(formdata);
    if (createdata.message === "SUCCESS") {
      setdisable(false);
      setlabeldata(true);
    }
  };
  return (
    <>
      <div className={`${styles.navContainer} section-width `}>
        <img className={styles.NavLogo} src="/Logo.png" alt="" />
        <div className={styles.navMenus}>
          {page == "" && (
            <p id="" onClick={navHandler} className={styles.activeNav}>
              Home
            </p>
          )}
          {page != "" && (
            <p id="" onClick={navHandler} className={styles.navMenu}>
              Home
            </p>
          )}
          {page == "course" && (
            <p id="" onClick={navHandler} className={styles.activeNav}>
              Course
            </p>
          )}
          {page != "course" && (
            <p id="course" onClick={navHandler} className={styles.navMenu}>
              Course
            </p>
          )}
          <p onClick={ContactHandler} className={styles.navMenu}>
            Contact
          </p>
          <button onClick={bookHandler}>Enroll Now !</button>
        </div>
        <img
          className={styles.navMenuIcon}
          onClick={sideBarHandler}
          src="/menu.png"
          alt=""
        />
      </div>
      {isContact && (
        <>
          <div
            id="overLay_"
            onClick={ContactHandler}
            className={`${styles.overLay} animate__animated animate__fadeIn `}
          ></div>
          <div
            id="Contact"
            className={`${styles.contactContainer} animate__fadeInUp animate__animated`}
          >
            <div className={styles.contactHeadingContainer}>
              <div className={styles.contactHeading}>
                <h1>Say</h1>
                <div className={styles.contactHeadingHightlight}>
                  <h1>Hello !</h1>
                  <img
                    className={styles.contactHeadingHightlight_img1}
                    src="/Highlight.png"
                    alt=""
                  />
                  <img
                    className={styles.contactHeadingHightlight_img2}
                    src="/3barBg.png"
                    alt=""
                  />
                </div>
              </div>
              <img className={styles.contactHeadingHeart} src="/heart.png" />
              <p>
              Get in Touch: Let's Chat, Code, and Make Your Tech Dreams a Reality Together!
              </p>
            </div>
            <hr />

            <div className={styles.contactDetailsContainer}>
              <div className={styles.contactForm}>
                <div className={styles.c_inputContainer}>
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Your Name Here !"
                    onChange={handlechange}
                    name="name"
                  />
                </div>
                <div className={styles.c_inputContainer}>
                  <label>Mobile</label>
                  <input
                    type="text"
                    placeholder="Your Name Here !"
                    onChange={handlechange}
                    name="phone"
                  />
                </div>
                <div className={styles.c_inputContainer}>
                  <label>E-mail</label>
                  <input
                    type="text"
                    placeholder="Your Name Here !"
                    onChange={handlechange}
                    name="email"
                  />
                </div>
                <div className={styles.c_inputContainer}>
                  <label>Message</label>
                  <textarea
                    placeholder="Your Name Here !"
                    onChange={handlechange}
                    name="message"
                  />
                </div>
                {labeldata && (
                  <h6
                    style={{ fontSize: "15px", color: "var(--tertiary-color)" }}
                  >
                    Your request was submitted successfully.
                  </h6>
                )}
                {disable === true ? (
                  <button>Please Wait</button>
                ) : (
                  <button onClick={bookbtn}>Send</button>
                )}
                <SocialMedia />
              </div>
              <div className={styles.contactAddress}>
                <h1>Contact Us</h1>
                <p className={styles.contactAddress_p}>
                Connect with Us: Reach Out and Let's Start Building Your Tech Success Story Today!
                </p>
                <div className={styles.ourMobile}>
                  <img src="/Ringing Phone.png" alt="" />
                  <p>+91 000 (00-00) 000</p>
                </div>
                <div className={styles.ourMail}>
                  <img src="/Postal.png" alt="" />
                  <p>Info@codepurple.in</p>
                </div>

                <div className={styles.ourAddress}>
                  <img src="/Love Path.png" alt="" />
                  <div className={styles.ourAddressContainer}>
                    <div>
                      <p>Visit us in Sivaksi. </p>
                      <h3>Lorem Ipsum is simply dummy text,</h3>
                      <h3>of the printing and typesetting industry,</h3>
                      <h3>Sivakasi - 000 000</h3>
                    </div>
                    <div>
                      <p>Visit us in Coimbatore. </p>
                      <h3>Lorem Ipsum is simply dummy text,</h3>
                      <h3>of the printing and typesetting industry,</h3>
                      <h3>Coimbatore - 000 000</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Nav;
