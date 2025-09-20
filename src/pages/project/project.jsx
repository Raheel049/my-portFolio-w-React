import React from "react";
import ProjectCard from "../../component/projectCard";
import styles from "./project.module.css"
import pro1Img from "./pro1Img.webp"
import pro2Img from "./pro2img.jpeg"
import pro3Img from "./pro3img.jpg"
import behancePic from "./behanceImg.png"
import todoSimp from "./simpleTodo.png"
import namazImg from "./namazImg.png"
import Navbar from "../../navbar/navbar";


const Project = () => {

  const behanceLive = () => {
    console.log("heool");
    window.open("https://behnece-websiteclone.vercel.app/")
  }

  const todoLive = () => {
    window.open("https://todo-using-react-fire-base.vercel.app/")
  }

  const namazTrackLive = () => {
    window.open("https://namaz-tracking-app-gamma.vercel.app/")
  }

  const todoSimpleLive = () => {
    window.open("https://todo-app-with-fire-base-kpuh.vercel.app/")
  }
 
  return (
    <>
      <Navbar/>
      <div className={styles.projectCont}>
        <div>
        <h1>My <span>Project</span></h1>
        </div>
        <p style={{textAlign:"center", fontSize:"19px", fontWeight:"600", marginBottom:"20px"}}>A Showcase of My Latest Projects</p>
        <div className={styles.projectCart}>
        <ProjectCard imgUrl={behancePic} title="Behance" functionName={behanceLive}  hoverTitle="Behance App clone using HTML, CSS">
          <div>
          <p>HTML</p>
          <p>CSS</p>
          <p>BootStramp</p>
          </div>
        </ProjectCard>

        <ProjectCard imgUrl={pro1Img} title="Todo App" functionName={todoLive} hoverTitle="The Todo APP using FireBase, HTML, CSS, JS">
          <div>
          <p>React</p>
          <p>Module CSS</p>
          <p>JavaScrpit</p>
          <p>FireBase</p>
          </div>
        </ProjectCard>

        <ProjectCard imgUrl={namazImg} title="Namaz Tracking App" functionName={namazTrackLive} hoverTitle="Namaz Tracking APP Fully responsive and working">
          <div>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>FireBase</p>
          </div>

        </ProjectCard>


        
        
        </div>

        <div className={styles.projectCart}>
        <ProjectCard imgUrl={todoSimp} title="Todo with FB" functionName={todoSimpleLive} hoverTitle="Todo APP">
          <div>
          <p>HTML</p>
          <p>CSS</p>
          <p>BootStramp</p>
          </div>
        </ProjectCard>

        <ProjectCard imgUrl={pro2Img} title="Todo App" hoverTitle="Todo App Powered by React">
          <div>
          <p>React</p>
          <p>Module CSS</p>
          <p>JavaScrpit</p>
          <p>FireBase</p>
          </div>
        </ProjectCard>

        <ProjectCard imgUrl={pro3Img} title="Namaz Tracking App" hoverTitle="Namaz Tracking APP Fully responsive and working">
          <div>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>FireBase</p>
          </div>

        </ProjectCard>
        </div>

        
      </div>
    </>
  );
};

export default Project;
