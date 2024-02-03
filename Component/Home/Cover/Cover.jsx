/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./Cover.module.css";
import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
import { viewallcover } from "@/Component/Api/cover";

const Cover = () => {

  const [coveritem, setcoveritem] = useState([]);
  // expand images
  const expandHandler = (e) => {
    if (e.target.id == "1") {
      document.getElementById(e.target.id).style.width = "40%";
      document.getElementById("2").style.width = "25%";
      document.getElementById("3").style.width = "25%";
    } else if (e.target.id == "2") {
      document.getElementById(e.target.id).style.width = "40%";
      document.getElementById("1").style.width = "25%";
      document.getElementById("3").style.width = "25%";
    } else if (e.target.id == "3") {
      document.getElementById(e.target.id).style.width = "40%";
      document.getElementById("1").style.width = "25%";
      document.getElementById("2").style.width = "25%";
    }
  };
  // standard images

  const standardHandler = () => {
    document.getElementById("1").style.width = "40%";
    document.getElementById("3").style.width = "25%";
    document.getElementById("2").style.width = "25%";
  };
  useEffect(() => {
    getAlldata();
  }, []);
  const getAlldata = async () => {
    var allcover = await viewallcover();
    setcoveritem(allcover);
  };
  return (
    <>
      {" "}
      <div className={`${styles.coverContainer}  section-width`}>
        <div className={styles.quotesContainer}>
          <h1>Watch.</h1>
          <h1>Learn.</h1>
          <h1>Grow.</h1>
          <img src="/3barBg.png" alt="" />
        </div>
        <div className={styles.quotesContainerMobile}>
          <p>HEY THERE !</p>
          <h1>Find Your Dream Job !</h1>
        </div>
        <div className={styles.nextEventContainer}>
          {coveritem.length !== 0
            ? coveritem.map((data, index) => (
                <img
                  id={index + 1}
                  onMouseEnter={expandHandler}
                  onMouseLeave={standardHandler}
                  className={`styles.nextEventImg_${index + 1}`}
                  src={data.image}
                  alt=""
                  key={index}
                />
              ))
            : null}

          {/* <div className={styles.courseSearchContainer_h}>
            <input placeholder="Search Course.." type="text" />
            <div>Go</div>
          </div> */}
        </div>
        <div className={styles.nextEventContainerMobile}>
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/event3.jpeg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/trainer1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/trainer2.png" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Cover;
