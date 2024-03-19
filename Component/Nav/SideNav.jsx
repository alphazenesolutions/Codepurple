import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CodePurpleAction } from "@/Store/Store";
import { IoClose } from "react-icons/io5";
import SocialMedia from "@/Component/Reusable/SocialMedia/SocialMedia";
import styles from "./SideNav.module.css";
import { CgClose } from "react-icons/cg";

const SideNav = () => {
  // SideBar handler
  var isSideNav = useSelector((store) => {
    return store.isSideNav;
  });

  // dispatch
  const dispatch = useDispatch();

  // sideBarHandler
  const sideBarHandler = () => {
    new Audio("/mouseClick1.mp3").play();
    document.getElementById("sideNav_").classList.add("animate__fadeOutRight");
    document.getElementById("overLay_").classList.add("animate__fadeOut");
    setTimeout(() => {
      dispatch(CodePurpleAction.sideNavHandler());
    }, 500);
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
  return (
    <div>
      {isSideNav && (
        <>
          <div
            id="overLay_"
            onClick={sideBarHandler}
            className={`${styles.overLay} animate__animated animate__fadeIn `}
          ></div>
          <div
            id="sideNav_"
            className={`${styles.sideNavContainer} animate__animated animate__fadeInRight `}
          >
            <div className={styles.sideNavContainer_web}>
              <div
                onClick={sideBarHandler}
                className={styles.sideBarCloseIconContainer}
              >
                <IoClose className={styles.sideBarCloseIcon} />
              </div>
              <div className={styles.quotesContainer_Sn}>
                <h1>Search</h1>
                <h1>Your</h1>
                <h1>Course !</h1>
                <img src="/3barBg.png" alt="" />
              </div>
              <div className={styles.courseSearchContainer_S_parent}>
                <div className={styles.courseSearchContainer_S}>
                  <input placeholder="Search Course.." type="text" />
                  <div>Go</div>
                </div>
                <p className={styles.courseSearchQuote}>
                Find Your Path: Explore and Discover the Perfect Course In CodePurple.
                </p>
              </div>

              <SocialMedia />
            </div>
            <div className={styles.sideNavContainer_mob}>
              <div className={styles.sideNavContent_mob}>
                <img className={styles.sideBarLogo} src="/Logo.png" alt="" />
                <div className={styles.SidenavMenus_m}>
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
                    <p id="course" onClick={navHandler}>
                      Course
                    </p>
                  )}
                  {page != "contact" && (
                    <p id="contact" onClick={navHandler}>
                      Contact
                    </p>
                  )}
                  {page == "contact" && (
                    <p id="contact" onClick={navHandler}>
                      Contact
                    </p>
                  )}
                </div>
                <hr />
                <div className={styles.snavMobSearchCoruseContainer}>
                  <h1 className={styles.snavMobSearchCoruse}>
                    Search Your Course !
                  </h1>
                  <div className={styles.courseSearchContainer_S_parent}>
                    <div className={styles.courseSearchContainer_S}>
                      <input placeholder="Search Course.." type="text" />
                      <div>Go</div>
                    </div>
                    <p className={styles.courseSearchQuote}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus odit explicabo, maiores reiciendis ab ut
                    </p>
                  </div>
                </div>
                <hr />
              </div>

              <SocialMedia />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SideNav;
