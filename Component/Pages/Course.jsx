import Courses from "@/Component/AllCourses/Courses/Courses";
import TechWeProvide from "@/Component/AllCourses/TechWeProvide/TechWeProvide";
import Footer from "@/Component/Footer/Footer";
import Cover from "@/Component/Home/Cover/Cover";
import HomeFaq from "@/Component/Home/HomeFaq/HomeFaq";
import Nav from "@/Component/Nav/Nav";
import UpdatesNav from "@/Component/Reusable/updatesNav/UpdatesNav";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { motion, useScroll, useSpring } from "framer-motion";
import BookDemo from "@/Component/BookDemo/BookDemo";
import CourseCover from "@/Component/AllCourses/CourseCover/CourseCover";
import SideNav from "@/Component/Nav/SideNav";

const Course = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  var isSideNav = useSelector((store) => {
    return store.isSideNav;
  });
  var isContact = useSelector((store) => {
    return store.isContact;
  });
  var isBookDemo = useSelector((store) => {
    return store.isBookDemo;
  });
  useEffect(() => {
    if (isSideNav || isContact || isBookDemo) {
      document.getElementById("course").style.height = "100vh";
      document.getElementById("course").style.overflow = "hidden";
    } else {
      document.getElementById("course").style.height = "100%";
      document.getElementById("course").style.overflow = "scroll";
    }
  }, [isSideNav, isContact, isBookDemo]);

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div id="course">
        <UpdatesNav />
        <Nav />
        <SideNav />
        <CourseCover />
        <Courses />
        <TechWeProvide />
        <HomeFaq />
        <Footer />
        {isBookDemo && <BookDemo />}
      </div>
    </>
  );
};

export default Course;
