import TechWeProvide from "@/Component/AllCourses/TechWeProvide/TechWeProvide";
import CourseExpand from "@/Component/CourseDetails/CourseExpand/CourseExpand";
import Cover from "@/Component/CourseDetails/Cover/Cover";
import Projects from "@/Component/CourseDetails/Projects/Projects";
import Footer from "@/Component/Footer/Footer";
import Testimonial from "@/Component/Home/Testimonial/Testimonial";
import Nav from "@/Component/Nav/Nav";
import UpdatesNav from "@/Component/Reusable/updatesNav/UpdatesNav";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import BookDemo from "@/Component/BookDemo/BookDemo";
import { useSelector } from "react-redux";
import SideNav from "@/Component/Nav/SideNav";
import HomeFaq from "@/Component/Home/HomeFaq/HomeFaq";
import CourseContentMob from "../CourseDetails/CourseContentMobile/CourseContentMob";

const CourseDetails = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  //
  var isSideNav = useSelector((store) => {
    return store.isSideNav;
  });
  var isContact = useSelector((store) => {
    return store.isContact;
  });
  var isBookDemo = useSelector((store) => {
    return store.isBookDemo;
  });
  const [sreenWidth, setsreenWidth] = useState(null);
  useEffect(() => {
    let screenWidth = window.screen.width;

    if (isSideNav || isContact || isBookDemo) {
      document.getElementById("courseDetail").style.height = "100vh";
      document.getElementById("courseDetail").style.overflow = "hidden";
    } else {
      document.getElementById("courseDetail").style.height = "100%";
      document.getElementById("courseDetail").style.overflow = "scroll";
    }
    setsreenWidth(screenWidth);
  }, [isSideNav, isContact, isBookDemo]);
  // screen width
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div id="courseDetail">
        <UpdatesNav />
        <Nav />
        <SideNav />
        <Cover />
        {sreenWidth > 600 ? <CourseExpand /> : <CourseContentMob />}
        <Projects />
        <TechWeProvide />
        <HomeFaq />
        <Footer />
        {isBookDemo && <BookDemo />}
      </div>
    </>
  );
};

export default CourseDetails;
