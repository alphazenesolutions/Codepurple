/* eslint-disable react-hooks/exhaustive-deps */
import TechWeProvide from "@/Component/AllCourses/TechWeProvide/TechWeProvide";
import CourseExpand from "@/Component/CourseDetails/CourseExpand/CourseExpand";
import Cover from "@/Component/CourseDetails/Cover/Cover";
import Projects from "@/Component/CourseDetails/Projects/Projects";
import Footer from "@/Component/Footer/Footer";
import Nav from "@/Component/Nav/Nav";
import UpdatesNav from "@/Component/Reusable/updatesNav/UpdatesNav";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import BookDemo from "@/Component/BookDemo/BookDemo";
import { useSelector } from "react-redux";
import SideNav from "@/Component/Nav/SideNav";
import HomeFaq from "@/Component/Home/HomeFaq/HomeFaq";
import CourseContentMob from "../CourseDetails/CourseContentMobile/CourseContentMob";
import { useRouter } from "next/router";
import { viewByidcourses } from "../Api/course";
import { viewByidModules } from "../Api/modules";
import { viewByidLesson } from "../Api/lesson";
import { viewallcourseproject } from "../Api/courseproject";

const CourseDetails = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const router = useRouter();
  const courseId = router.query.courseDetails;

  const [coursename, setcoursename] = useState(null);
  const [duration, setduration] = useState(0);
  const [modulecount, setmodulecount] = useState(0);
  const [allmoduledata, setallmoduledata] = useState([]);
  const [lessoncount, setlessoncount] = useState(0);
  const [batch, setbatch] = useState(null);
  const [coursedescription, setcoursedescription] = useState(null);
  const [syllabus, setsyllabus] = useState(null);
  const [techdata, settechdata] = useState(null);
  const [projectdata, setprojectdata] = useState([]);

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

  useEffect(() => {
    getCouseinfo();
  }, [courseId]);

  const getCouseinfo = async () => {
    if (courseId !== undefined) {
      var singledata = await viewByidcourses({
        id: courseId,
      });
      if (singledata.length !== 0) {
        var moduledata = JSON.parse(singledata[0].selectedmodule);
        setcoursename(singledata[0].title);
        setcoursedescription(singledata[0].description);
        setbatch(singledata[0].batch);
        setduration(singledata[0].duration);
        setmodulecount(moduledata.length);
        setsyllabus(singledata[0].syllabus);
        settechdata(singledata[0].techdata);
        if (moduledata.length !== 0) {
          var lessonarray = [],
            allmoduledata = [];
          for (var i = 0; i < moduledata.length; i++) {
            var singledata = await viewByidModules({ id: moduledata[i] });
            if (singledata.length !== 0) {
              var lessondata = JSON.parse(singledata[0].selectedlesson);
              if (lessondata.length !== 0) {
                var lessalldata = [];
                for (var j = 0; j < lessondata.length; j++) {
                  var less_data = await viewByidLesson({ id: lessondata[j] });
                  lessalldata.push(less_data[0]);
                }
                singledata[0].lesson_data = lessalldata;
                allmoduledata.push(singledata[0]);
              }
              lessonarray.push(lessondata.length);
            }
          }
          setallmoduledata(allmoduledata);
          var sum = await lessonarray.reduce(
            (partialSum, a) => partialSum + a,
            0
          );
          setlessoncount(sum);
        }
        var projectdata = await viewallcourseproject({ id: courseId });
        setprojectdata(projectdata);
      }
    }
  };
  console.log(projectdata, "projectdata");
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div id="courseDetail">
        <UpdatesNav />
        <Nav />
        <SideNav />
        <Cover
          coursename={coursename}
          coursedescription={coursedescription}
          duration={duration}
          modulecount={modulecount}
          lessoncount={lessoncount}
          batch={batch}
        />
        {sreenWidth > 600 ? (
          <CourseExpand allmoduledata={allmoduledata} syllabus={syllabus} />
        ) : (
          <CourseContentMob allmoduledata={allmoduledata} syllabus={syllabus} />
        )}
        <Projects projectdata={projectdata} />
        <TechWeProvide techdata={techdata} />
        <HomeFaq />
        <Footer />
        {isBookDemo && <BookDemo />}
      </div>
    </>
  );
};

export default CourseDetails;
