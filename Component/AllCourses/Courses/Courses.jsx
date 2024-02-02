/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./Courses.module.css";
import CourseCard from "@/Component/Reusable/CourseCard/CourseCard";
import { viewallcourses } from "@/Component/Api/course";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const Courses = () => {
  const [allcoursedata, setallcoursedata] = useState([]);
  const [finalcoursedata, setfinalcoursedata] = useState([]);

  const courseDetailsHandler = (id) => {
    window.location.replace(`/courseDetails/${id}`);
  };

  useEffect(() => {
    getAllcourse();
  }, []);

  const getAllcourse = async () => {
    var allcourse = await viewallcourses();
    setfinalcoursedata(allcourse);
    setallcoursedata(allcourse);
  };

  const searchcourse = async (e) => {
    if (allcoursedata.length !== 0) {
      if (e.length !== 0) {
        var filterdata = await finalcoursedata.filter((data) => {
          return data.title.toLowerCase().includes(e);
        });
        setallcoursedata(filterdata);
      } else {
        setallcoursedata(finalcoursedata);
      }
    }
  };
  return (
    <div className={`${styles.CoursesContainer} section-width `}>
      <div className={styles.CoursesHeadingContainer}>
        <div>
          <div className={styles.CoursesHeading}>
            <h1>Courses We Provide</h1>
            <img src="/Highlight.png" alt="" />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
            Eaque est nostrum officiis quos facilis,
          </p>
        </div>
        <div className={styles.CourseSearchContainer}>
          <input
            type="text"
            placeholder="Search Courses.."
            onChange={(e) => {
              searchcourse(e.target.value);
            }}
          />
          <div className={styles.CourseSearchFilter}>
            <select>
              <option>value</option>
              <option>value</option>
            </select>
            <select>
              <option>value</option>
              <option>value</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.Courses}>
        {allcoursedata.length !== 0
          ? allcoursedata.map((data, index) => (
              <CourseCard
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
      </div>
    </div>
  );
};

export default Courses;
