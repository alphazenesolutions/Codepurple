import UpdatesNav from "@/Component/Reusable/updatesNav/UpdatesNav";
import Nav from "@/Component/Nav/Nav";
import Cover from "@/Component/Home/Cover/Cover";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import HomeCourse from "@/Component/Home/HomeCourse/HomeCourse";
import Footer from "@/Component/Footer/Footer";
import HomeExpand from "@/Component/Home/HomeExpand/HomeExpand";
import HomeFaq from "@/Component/Home/HomeFaq/HomeFaq";
import Testimonial from "@/Component/Home/Testimonial/Testimonial";
import BookDemo from "@/Component/BookDemo/BookDemo";
import { motion, useScroll, useSpring } from "framer-motion";
import VissionMission from "@/Component/Home/History/VissionMission";
import SideNav from "@/Component/Nav/SideNav";
import HomeExpandMob from "@/Component/Home/HomeExpandMob/HomeExpandMob";

export default function Home() {
  const [sreenWidth, setsreenWidth] = useState(null);

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
    let screenWidth = window.screen.width;

    if (isSideNav || isContact || isBookDemo) {
      document.getElementById("home").style.height = "100vh";
      document.getElementById("home").style.overflow = "hidden";
    } else {
      document.getElementById("home").style.height = "100%";
      document.getElementById("home").style.overflow = "scroll";
    }
    setsreenWidth(screenWidth);
  }, [isSideNav, isContact, isBookDemo]);

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div id="home">
        <UpdatesNav />
        <Nav />
        <SideNav />
        <Cover />
        <HomeCourse />
        {sreenWidth > 600 ? <HomeExpand /> : <HomeExpandMob />}

        <VissionMission />
        <Testimonial />

        <HomeFaq />
        {isBookDemo && <BookDemo />}
        <Footer />
      </div>
    </>
  );
}
