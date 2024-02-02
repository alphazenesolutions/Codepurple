/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import styles from "./Contact.module.css";
import { createContactuser } from "../Api/contactuser";
const Contact = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [disable, setdisable] = useState(false);
  const [labeldata, setlabeldata] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata((values) => ({ ...values, [name]: value }));
  };
  const bookbtn = async () => {
    setdisable(true);
    var createdata = await createContactuser(formdata);
    if (createdata.message === "SUCCESS") {
      setdisable(false);
      setlabeldata(true);
    }
  };
  return (
    <>
      <div
        id="Contact"
        className={`${styles.contactContainer} animate__fadeInUp animate__animated`}
      >
        <div className={styles.contactHeadingContainer}>
          <div className={styles.contactHeading}>
            <h1>Say Hello !</h1>
          </div>
          <img className={styles.contactHeadingHeart} src="/heart.png" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. T
            emporibus, omnisemporibus, omnis. <br /> Lorem, ipsum dolor sit amet
            consectetur adipisicing omnis.
          </p>
        </div>
        <hr />

        <div className={styles.contactDetailsContainer}>
          <div className={styles.contactForm}>
            <div className={styles.c_inputContainer}>
              <label>Name</label>
              <input
                type="text"
                placeholder="Your Name Here !"
                onChange={handlechange}
                name="name"
              />
            </div>
            <div className={styles.c_inputContainer}>
              <label>Mobile</label>
              <input
                type="text"
                placeholder="Your Name Here !"
                onChange={handlechange}
                name="phone"
              />
            </div>
            <div className={styles.c_inputContainer}>
              <label>E-mail</label>
              <input
                type="text"
                placeholder="Your Name Here !"
                onChange={handlechange}
                name="email"
              />
            </div>
            <div className={styles.c_inputContainer}>
              <label>Message</label>
              <textarea
                placeholder="Your Name Here !"
                onChange={handlechange}
                name="message"
              />
            </div>
            {labeldata && (
              <h6 style={{ fontSize: "15px", color: "var(--tertiary-color)" }}>
                Your request was submitted successfully.
              </h6>
            )}
            {disable === true ? (
              <button>Please Wait</button>
            ) : (
              <button onClick={bookbtn}>Send</button>
            )}
          </div>
          <div className={styles.contactAddress}>
            <h1>Contact Us</h1>
            <p className={styles.contactAddress_p}>
              As a human; I am flesh and blood; I can be ignored. But as a
              symbol, I can be incorruptible.
            </p>
            <div className={styles.ourMobile}>
              <img src="/Ringing Phone.png" alt="" />
              <p>+91 000 (00-00) 000</p>
            </div>
            <div className={styles.ourMail}>
              <img src="/Postal.png" alt="" />
              <p>Info@codepurple.in</p>
            </div>

            <div className={styles.ourAddress}>
              <img src="/Love Path.png" alt="" />
              <div className={styles.ourAddressContainer}>
                <div>
                  <p>Visit us in Sivaksi. </p>
                  <h3>Lorem Ipsum is simply dummy text,</h3>
                  <h3>of the printing and typesetting industry,</h3>
                  <h3>Sivakasi - 000 000</h3>
                </div>
                <div>
                  <p>Visit us in Coimbatore. </p>
                  <h3>Lorem Ipsum is simply dummy text,</h3>
                  <h3>of the printing and typesetting industry,</h3>
                  <h3>Coimbatore - 000 000</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
