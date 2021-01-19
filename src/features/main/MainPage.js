import React from "react";
import MainContent from "../resumecontainer/MainContent";
import Resume from "./Resume.pdf";
import ProjectContainer from "../projectcontainer/ProjectContainer";
import ContactDetails from "../contactdetails/ContactDetails";

// Import fro Material-Ui and Styling parametrization
import styles from "./MainPage.module.css";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { pink, blue } from "@material-ui/core/colors";
import Typewriter from "typewriter-effect";

const useStyles = makeStyles((theme) => ({
  cvDownloadButtonTop: {
    // gridColumn: "2/4",
    // gridRow: "1/2",
    // justifySelf: "end",
    // alignSelf: "start",
    position: "fixed",
    zIndex: 3,
    top: 50,
    right: 50,
    color: "white",
    backgroundColor: pink[500],
    // margin: "3rem 1rem",
    "&:hover": {
      backgroundColor: pink[300],
      borderColor: pink[500],
    },
    "&:focus": {
      outline: "none",
    },
    [theme.breakpoints.down(360)]: {
      fontSize: 10,
    },
    [theme.breakpoints.between(361, 720)]: {
      fontSize: 12,
    },
  },
  linkSocialNetwork: {
    width: "4rem",
    height: "4rem",
  },
  iconSocialNetwork: {
    width: "2.5rem",
    height: "auto",
    color: "black",
    "&:hover": {
      color: blue[700],
    },
  },
}));

function MainPage() {
  // Material-UI classes
  const classes = useStyles();

  return (
    <div className={`${styles.mainContainer} ${styles.mainContainer__grid}`}>
      <div className={styles.header__background} />
      <Button href={Resume} className={classes.cvDownloadButtonTop}>
        DOWNLOAD RESUME
      </Button>
      <div className={styles.header}>
        <div className={styles.header__title}>
          <h1>Sorasi Muon</h1>
          <h2>
            <span>
              <Typewriter
                options={{
                  strings: [
                    "WEB DEVELOPER FULLSTACK",
                    "REACT ADEPT",
                    "OPEN TO OPPORTUNITIES",
                  ],
                  autoStart: true,
                  loop: true,
                  pauseFor: 3000,
                  wrapperClassName: styles.typeWriter,
                  cursorClassName: styles.typeWriter,
                }}
              />
            </span>
          </h2>
        </div>
      </div>
      <MainContent />
      <ProjectContainer />
      <ContactDetails />
    </div>
  );
}

export default MainPage;
