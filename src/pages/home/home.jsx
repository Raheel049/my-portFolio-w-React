import React from "react";
import styles from "./home.module.css";
import myPic from "./myPic.jpg";
import { useState, useEffect } from "react";
import ButtonCmp from "../../component/buttonCmp";
import Navbar from "../../navbar/navbar";

const Home = () => {
  const text = " Raheel Ahmed";
  const [displayText, setDisplayText] = useState(text);
  const [deleting, setDeleting] = useState(true);

  useEffect(() => {
    let interval;

    if (deleting) {
      // delete letters
      interval = setInterval(() => {
        setDisplayText((prev) => {
          if (prev.length > 0) {
            return prev.slice(0, -1);
          } else {
            setDeleting(false); // switch to typing
            return "";
          }
        });
      }, 150); // delete speed
    } else {
      // type letters
      interval = setInterval(() => {
        setDisplayText((prev) => {
          if (prev.length < text.length) {
            return text.slice(0, prev.length + 1);
          } else {
            setDeleting(true); // switch to deleting again
            return text;
          }
        });
      }, 150); // typing speed
    }


    
    return () => clearInterval(interval);
  }, [deleting, text]);

  

  const moveToWhatsap = () => {
    console.log("hello moveToWhatsap")
    window.open("https://api.whatsapp.com/send/?phone=923058093023&text&type=phone_number&app_absent=0", "_blank")
  }

  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = "/RaheelAhmedResume.pdf"
    link.download = "Raheel-Ahmed-Resume"
    link.click()
  }

  return (
    <>
        <Navbar />
        <h1 style={{textAlign:"center"}}>
          <span className={styles.headSty}>Hello, I am</span> <span style={{color:"white"}}>{displayText}</span>
        </h1>

      <div className={styles.introCont}>
        <div className={styles.paraImg}>
          <p>
            I’m a passionate Frontend Developer with hands-on experience in
            building modern, responsive, and user-friendly web applications. I
            specialize in HTML, CSS, JavaScript, React, Bootstrap, and Material
            UI, creating clean designs and smooth user experiences.Currently,
            I’m focused on sharpening my full-stack skills while crafting
            creative projects to showcase my journey as a developer.
          </p>
          <img src={myPic} alt="" />
        </div>
        <div className={styles.whatsApCvBtnCont}>
          <ButtonCmp title="Hire me" onClick={moveToWhatsap} className={styles.whBtn}/>
          <ButtonCmp title="Download CV" onClick={downloadCv} className={styles.cvBtn}/>
        </div>
      </div>
    </>
  );
};

export default Home;
