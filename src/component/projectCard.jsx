import React, { Children } from "react";
import styles from "./projectCard.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({children,imgUrl,title,functionName,hoverTitle}) => {

  const githubLink = () => {
    window.open("https://github.com/Raheel049?tab=repositories")
  } 

  return (
    <>
      <div className={styles.projectCardCont}>
        <div className={styles.projectCardImg}>
            <img src={imgUrl} alt="" />
            <h2>{hoverTitle}</h2>
        </div>
        <div className={styles.projectDes}>
            <h1>{title || "proName"}</h1>
            <div className={styles.para}>
            {children}

            </div>
            <div className={styles.btn}>
            <button style={{marginRight:"20px"}} onClick={githubLink}><FontAwesomeIcon icon={faGithub}  style={{marginRight:"8px"}} />Code</button>
            <button onClick={functionName}><FontAwesomeIcon icon={faArrowUpRightFromSquare} />Live demo</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
