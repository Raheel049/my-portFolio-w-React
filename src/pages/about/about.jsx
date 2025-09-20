import React from "react";
import styles from "./about.module.css"
import aboutImg from "./aboutImg.jpg"
import SkillCard from "../../component/skillCard";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../navbar/navbar";

const About = () => {

  const linkdlnPageHandler = () => {
     window.open("https://www.linkedin.com/in/raheel-ahmed-6a2a19264", "_blank")
  }

  return (
    <>
      <Navbar />
      <div className={styles.mainCont}>
        <div className={styles.about}>
          <h1>About <span className={styles.mySelfColor}>MySelf</span></h1>
          <h3>Discover more about my skills and expertise. 🔍</h3>
          <p>
            <span className={styles.paraStyle}>
            I am a Frontend Developer and a BS Computer Science student,
            currently learning MERN Stack Development.
            
              </span>
              I am eager to join a
              software company to gain hands-on experience,
              enhance my skills, and
            work on real-world applications.
               
              I am highly motivated to contribute
            to impactful projects and continue growing as a developer.
                
          </p>
        </div>
        <div className={styles.imgCardCont}>
          <div className={styles.image}>
            <img src={aboutImg} alt="" width={300} />

          </div>
          
          <div className={styles.skillCard}>
          
          <SkillCard title="Development">
           <p>Forentend</p>
           <p>Backend</p>
           <p>DataBase</p>

          </SkillCard>
          

          
          <SkillCard title="Forentend">
            <p>HTML 5</p>
            <p>CSS</p>
            <p>BootStrmp</p>
            <p>JavaScript</p>
            <p>ES 6</p>
            <p>React</p>
            <p>MUI</p>
          </SkillCard>
          

          
          <SkillCard title="Backend">
            <p>Node JS</p>
            <p>Exp Js</p>
            <p>DB</p>
            <p>MySQL</p>

          </SkillCard>
          
          </div>
        </div>

        <div className={styles.linkdlnParaCont}>
          <p>Join forces with me to create something extraordinary!</p>
          <button className={styles.linkdlnBtn} onClick={linkdlnPageHandler}><FontAwesomeIcon icon={faRocket} style={{color:"white", marginRight:"8px"}}/>Begin collaborating Now!</button>
        </div>
      </div>
    </>
  );
};

export default About;
