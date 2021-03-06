import React from "react";
import Resume from "./Resume.pdf";
import ProjectContainer from "../projectcontainer/ProjectContainer";
import ContactContainer from "../contactcontainer/ContactContainer";

// Import fro Material-Ui and Styling parametrization
import styles from "./MainPage.module.css";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { pink, blue, teal } from "@material-ui/core/colors";
import Typewriter from "typewriter-effect";
import profilePicture from "../../images/Avatar.png";
import ResumeContainer from "../resumecontainer/ResumeContainer";

const useStyles = makeStyles((theme) => ({
  header__floatingCVDownloadButton: {
    color: "white",
    backgroundColor: teal[400],
    "&:hover": {
      backgroundColor: teal[200],
    },
    "&:focus": {
      outline: "none",
    },
    position: "fixed",
    zIndex: 2,
    [theme.breakpoints.between(0, 767.98)]: {
      fontSize: "0.6rem",
      top: 20,
      right: 20,
    },
    [theme.breakpoints.up(768)]: {
      fontSize: "0.8rem",
      top: 50,
      right: 50,
    },
  },
}));

function MainPage() {
  // Material-UI classes
  const classes = useStyles();

  return (
    <div className={`${styles.mainContainer} ${styles.mainContainer__grid}`}>
      <Button
        href={Resume}
        className={classes.header__floatingCVDownloadButton}
      >
        DOWNLOAD RESUME
      </Button>
      <div className={styles.header__title}>
        <h1>Sorasi Muon</h1>
        <Typewriter
          options={{
            strings: [
              "full stack Web Developer",
              "React Enthusiast",
              "OPEN TO OPPORTUNITIES",
            ],
            autoStart: true,
            loop: true,
            pauseFor: 3000,
            wrapperClassName: styles.typeWriter,
            cursorClassName: styles.typeWriter,
          }}
        />
      </div>
      <img src={profilePicture} className={styles.profilePicture} />
      <ResumeContainer />
      <ProjectContainer />
      <ContactContainer />
    </div>
  );
}

export default MainPage;
