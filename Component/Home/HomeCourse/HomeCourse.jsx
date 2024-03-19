/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useState } from "react";
import styles from "./HomeCourse.module.css";
import CourseCard1 from "@/Component/Reusable/CourseCard1/CourseCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { viewallcourses } from "@/Component/Api/course";

const HomeCourse = () => {
  const courseDetailsHandler = (id) => {
    window.location.replace(`/courseDetails/${id}`);
  };
  var scrollDataX = "";
  var scrollDataX1 = "";
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let screenWidth = window.screen.width;
    if (screenWidth < 600) {
      scrollDataX = 1200;
      scrollDataX1 = -1200;
    } else {
      scrollDataX = 700;
      scrollDataX1 = -700;
    }
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".divPin",
        start: "-7%",
        end: "center top",
        pin: ".divPin",
        scrub: 8,
      },
    });
    tl.fromTo(".One", { x: scrollDataX }, { x: scrollDataX1 });
    return () => {
      tl.kill();
    };
  });
  useEffect(() => {
    getalldata();
  }, []);
  const [coursedata, setcoursedata] = useState([]);

  const getalldata = useCallback(async () => {
    var alldata = await viewallcourses();
    setcoursedata(alldata);
  }, []);

  return (
    <div className={styles.HomeCourseContainer}>
      <div className={`${styles.pinDiv} divPin`}>
        <div className={styles.CourseHomeHeadContainer}>
          <div className={styles.CourseHomeHeadHeading}>
            <h1> Trending Courses </h1>
            <img src="/Highlight.png" alt="" />
            <p>Explore What's Hot: Check Out Our Trending Tech Courses for Exciting Learning Opportunities!</p>
          </div>
          <p></p>
        </div>

        <div className={styles.homeCourse}>
          <div className={styles.innerHomeCourse}>
          {console.log(coursedata)}
            {
            coursedata.length !== 0
            
              ? coursedata.map((data, index) => (

                  <CourseCard1
                    fun={() => {
                      courseDetailsHandler(data.id);
                    }}
                    img={data.icon}
                    title={data.title}
                    desc={data.shortdescription}
                    actualPrice={data.price}
                    offerPrice={data.offerprice}
                    totalStudents="2.5"
                    hours={data.duration}
                    module={JSON.parse(data.selectedmodule).length}
                    className="One"
                    key={index}
                  />
                ))
              : null}
            {/* <CourseCard1
              fun={courseDetailsHandler}
              img="/course1.png"
              title="Full Stack in Web Development"
              desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nemo dicta vitae earum sint!"
              actualPrice="89,999"
              offerPrice="39,999"
              totalStudents="2.5"
              hours="90"
              module="10"
              className="One"
            />
            <CourseCard1
              width="400px"
              fun={courseDetailsHandler}
              img="/course2.jpeg"
              title="Full Stack in Web Development"
              desc="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nemo dicta vitae earum sint!"
              actualPrice="89,999"
              offerPrice="39,999"
              totalStudents="2.5"
              hours="90"
              module="10"
              className="One"
            />
            <CourseCard1
              width="400px"
              fun={courseDetailsHandler}
              img="/course3.jpeg"
              title="Full Stack in Web Development"
              desc="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nemo dicta vitae earum sint!"
              actualPrice="89,999"
              offerPrice="39,999"
              totalStudents="2.5"
              hours="90"
              module="10"
              className="One"
            />
            <CourseCard1
              width="400px"
              fun={courseDetailsHandler}
              img="/course1.png"
              title="Full Stack in Web Development"
              desc="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nemo dicta vitae earum sint!"
              actualPrice="89,999"
              offerPrice="39,999"
              totalStudents="2.5"
              hours="90"
              module="10"
              className="One"
            />
            <CourseCard1
              width="400px"
              fun={courseDetailsHandler}
              img="/course2.jpeg"
              title="Full Stack in Web Development"
              desc="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nemo dicta vitae earum sint!"
              actualPrice="89,999"
              offerPrice="39,999"
              totalStudents="2.5"
              hours="90"
              module="10"
              className="One"
            />
            <CourseCard1
              width="400px"
              fun={courseDetailsHandler}
              img="/course3.jpeg"
              title="Full Stack in Web Development"
              desc="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nemo dicta vitae earum sint!"
              actualPrice="89,999"
              offerPrice="39,999"
              totalStudents="2.5"
              hours="90"
              module="10"
              className="One"
            /> */}
          </div>
        </div>
        {/* <div className={styles.spacer}></div> */}
      </div>
    </div>
  );
};

export default HomeCourse;
