/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./HomeFaq.module.css";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { gsap } from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { CodePurpleAction } from "@/Store/Store";
import { viewallQuestion } from "@/Component/Api/question";
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
  var isFaq = useSelector((store) => {
    return store.isFaq;
  });

  const dispatch = useDispatch();

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
  const [allquestion, setallquestion] = useState([]);

  useEffect(() => {
    getAllquestion();
  }, []);

  const getAllquestion = async () => {
    var alldata = await viewallQuestion();
    setallquestion(alldata);
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
            {allquestion.length !== 0
              ? allquestion.map((data, i) => (
                  <div key={i} className={`${styles.FaqQs} `}>
                    <div className={styles.FaqQsHead}>
                      <h1>{data.title}</h1>
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
                        {data.description}
                      </p>
                    )}
                  </div>
                ))
              : null}
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
