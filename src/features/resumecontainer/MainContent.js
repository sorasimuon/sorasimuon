import React, { Fragment } from "react";
import CvContent from "../resumecontent/CvContent";

// IMport fro Material-Ui and Styling parametrization
import styles from "./MainContent.module.css";
import { makeStyles, useTheme } from "@material-ui/core";
import profilePicture from "./Avatar.png";
import IconButton from "@material-ui/core/IconButton";
import { blue, pink } from "@material-ui/core/colors";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  linkSocialNetwork: {
    width: "3rem",
    height: "auto",
    "&:hover": {
      color: blue[100],
      width: "3rem",
      height: "auto",
    },
  },
  iconSocialNetwork: {
    width: "2.5rem",
    height: "auto",
    color: pink[500],
    "&:hover": {
      color: pink[300],
    },
  },
}));

function MainContent() {
  // Material-UI classes
  const classes = useStyles();

  //Links
  const githubLink = "https://github.com/sorasimuon";
  const linkedInLink = "https://www.linkedin.com/in/sorasi-muon/";

  return (
    <Fragment>
      <img src={profilePicture} className={styles.profilePicture} />
      <div className={styles.descriptionBackground} />
      <div className={styles.descriptionContent}>
        <div className={styles.socialLink}>
          <IconButton href={githubLink} className={classes.linkSocialNetwork}>
            <GitHubIcon className={classes.iconSocialNetwork} />
          </IconButton>
          <IconButton href={linkedInLink} className={classes.linkSocialNetwork}>
            <LinkedInIcon
              className={classes.iconSocialNetwork}
              style={{ width: "3rem" }}
            />
          </IconButton>
        </div>
        <CvContent />
      </div>
    </Fragment>
  );
}

export default MainContent;
