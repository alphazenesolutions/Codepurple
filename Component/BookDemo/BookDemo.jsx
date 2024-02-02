/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./BookDemo.module.css";
import SocialMedia from "../Reusable/SocialMedia/SocialMedia";
import { useDispatch } from "react-redux";
import { CodePurpleAction } from "@/Store/Store";
import { viewallcourses } from "../Api/course";
import { createEntrolluser } from "../Api/entrolluser";
const BookDemo = () => {
  // dispatch
  const dispatch = useDispatch();
  // bookHandler
  const bookHandler = () => {
    document.getElementById("bookDemo").classList.add("animate__fadeOutRight");
    document.getElementById("overLay_").classList.add("animate__fadeOut");
    setTimeout(() => {
      dispatch(CodePurpleAction.bookHandler());
    }, 500);
  };
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    howtofind: "",
  });
  const [allcourse, setallcourse] = useState([]);
  const [disable, setdisable] = useState(false);
  const [labeldata, setlabeldata] = useState(false);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata((values) => ({ ...values, [name]: value }));
  };
  const bookbtn = async () => {
    setdisable(true);
    var createdata = await createEntrolluser(formdata);
    if (createdata.message === "SUCCESS") {
      setdisable(false);
      setlabeldata(true);
    }
  };
  useEffect(() => {
    getAlldata();
  }, []);
  const getAlldata = async () => {
    setlabeldata(false)
    var allcourse = await viewallcourses();
    setallcourse(allcourse);
  };

  return (
    <>
      <div
        id="bookDemo"
        className={`${styles.BookDemoContainer} animate__animated animate__fadeInRight`}
      >
        <img className={styles.BookDemoLogo} src="/Logo.png" alt="" />
        <div className={styles.B_inputContainer}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Your Name Here !"
            onChange={handlechange}
            name="name"
          />
        </div>
        <div className={styles.B_inputContainer}>
          <label>Mobile</label>
          <input
            type="text"
            placeholder="Your Name Here !"
            onChange={handlechange}
            name="phone"
          />
        </div>
        <div className={styles.B_inputContainer}>
          <label>E-mail</label>
          <input
            type="text"
            placeholder="Your Name Here !"
            onChange={handlechange}
            name="email"
          />
        </div>
        <div className={styles.B_inputContainer}>
          <label>Course</label>
          <select onChange={handlechange} name="course">
            <option value="">Select Course</option>
            {allcourse.length !== 0
              ? allcourse.map((data, index) => (
                  <option value={data.title} key={index}>
                    {data.title}
                  </option>
                ))
              : null}
          </select>
        </div>
        <div className={styles.B_inputContainer}>
          <label>How you find us ?</label>
          <input
            type="text"
            placeholder="Your Name Here !"
            onChange={handlechange}
            name="howtofind"
          />
        </div>
        {labeldata && <h6 style={{fontSize:"15px",color:"var(--tertiary-color)"}}>Your request was submitted successfully.</h6>}
        {disable === true ? (
          <button>Please Wait</button>
        ) : (
          <button onClick={bookbtn}>Book</button>
        )}

        <SocialMedia />
      </div>
      <div
        id="overLay_"
        onClick={bookHandler}
        className={`${styles.overLay_B} animate__animated animate__fadeIn `}
      ></div>
    </>
  );
};

export default BookDemo;
