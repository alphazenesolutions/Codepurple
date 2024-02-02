import React, { useState } from "react";
import styles from "./HomeFaq.module.css";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { gsap } from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { CodePurpleAction } from "@/Store/Store";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
const HomeFaq = () => {
  const [currentQ, setcurrentQ] = useState(null);
  const [category, setcategory] = useState(1);

  const eventOpen = (i) => {
    setcurrentQ(i);
  };
  const eventClose = (i) => {
    setcurrentQ(null);
  };

  const FaqData = [
    {
      id: 1,
      category: 1,
      Question: "Ouestion 1",
      Ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy dummy, dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy dummy, dummy",
    },
    {
      id: 2,
      category: 1,
      Question: "Ouestion 2",
      Ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy dummy, dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy dummy, dummy",
    },
    {
      id: 2,
      category: 1,
      Question: "Ouestion 2",
      Ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy dummy, dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy dummy, dummy",
    },
    {
      id: 2,
      category: 1,
      Question: "Ouestion 2",
      Ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy dummy, dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy dummy, dummy",
    },
    {
      id: 3,
      category: 2,
      Question: "Ouestion 3",
      Ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy dummy, dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy dummy, dummy",
    },
    {
      id: 4,
      category: 3,
      Question: "Ouestion 4",
      Ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy dummy, dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy dummy, dummy",
    },
  ];
  // isFaq
  var isFaq = useSelector((store) => {
    return store.isFaq;
  });
  // dispatch
  const dispatch = useDispatch();
  // gsap
  // gsap.registerPlugin(ScrollTrigger);
  let tl = gsap.timeline({ paused: true, reversed: true });
  const faqHandler = () => {
    dispatch(CodePurpleAction.faqtHandler());
    tl.play();
    tl.to(".faqBody", {
      width: "100vw",
      height: "85vh",
      display: "block",
      backgroundColor: "white",
      borderRadius: "50px 50px 0 0 ",
      left: 0,
      bottom: 0,
      ease: "none",
    });
  };
  const faqCloseHandler = () => {
    dispatch(CodePurpleAction.faqfHandler());
    tl.play();
    tl.to(".faqBody", {
      width: "120px",
      backgroundColor: "black",

      height: "50px",
      display: "flex",
      borderRadius: "20px 20px 20px 0 ",
      left: "2%",
      bottom: "4%",
      ease: "none",
    });
  };
  return (
    <>
      <div onClick={faqHandler} className={`${styles.FaqBtn} faqBody`}>
        {!isFaq && <p>GOT QS ?</p>}
        {isFaq && (
          <div
            className={`${styles.faqContainer} animate__fadeInUp animate__animated`}
          >
            <div className={styles.faqHeadingContainer}>
              <div className={styles.faqHeading}>
                <h1>Got</h1>
                <div className={styles.faqHeadingHightlight}>
                  <h1>Question ?</h1>
                  <img
                    className={styles.faqHeadingHightlight_img1}
                    src="/Highlight.png"
                    alt=""
                  />
                  <img
                    className={styles.faqHeadingHightlight_img2}
                    src="/3barBg.png"
                    alt=""
                  />
                </div>
              </div>
              <img className={styles.faqHeadingHeart} src="/heart.png" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. T
                emporibus, omnisemporibus, omnis. <br /> Lorem, ipsum dolor sit
                amet consectetur adipisicing omnis.
              </p>
            </div>
            <hr />
            <div className={styles.faqBodyContent}>
              <div className={styles.FaqQsContainer}>
                {FaqData.map((data, i) => {
                  return (
                    <>
                      {data.category == category && (
                        <div key={i} className={`${styles.FaqQs} `}>
                          <div className={styles.FaqQsHead}>
                            <h1>How to get certified?</h1>
                            {currentQ != i && (
                              <CiSquarePlus
                                onClick={() => eventOpen(i)}
                                className={`${styles.FaqQsHeadOpen_} animate__fadeIn animate__animated`}
                                id={data.id}
                              />
                            )}
                            {currentQ == i && (
                              <CiSquareMinus
                                onClick={() => eventClose(i)}
                                className={`${styles.FaqQsHeadOpen_} animate__fadeIn animate__animated`}
                                id={data.id}
                              />
                            )}
                          </div>
                          {currentQ == i && (
                            <p className="animate__fadeIn animate__animated">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy dummy, dummy Lorem Ipsum
                              is simply dummy text of the printing and
                              typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy dummy, dummy
                            </p>
                          )}
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      {isFaq && (
        <div
          onClick={faqCloseHandler}
          id="overLay_Faq"
          className={`${styles.overLay_faq} animate__animated animate__fadeIn `}
        ></div>
      )}
    </>
  );
};

export default HomeFaq;
