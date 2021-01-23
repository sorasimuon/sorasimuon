import React, { Fragment } from "react";
import CvContent from "../resumecontent/CvContent";

// IMport fro Material-Ui and Styling parametrization
import styles from "./ResumeContainer.module.css";
import { makeStyles, useTheme } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { blue, pink } from "@material-ui/core/colors";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  linkSocialNetwork: {
    "&:hover": {
      color: blue[100],
    },
    [theme.breakpoints.down(768)]: {
      width: "3rem",
    },
    [theme.breakpoints.up(769)]: {
      width: "3.5rem",
    },
    height: "auto",
  },
  iconSocialNetwork: {
    color: pink[500],
    "&:hover": {
      color: pink[200],
    },
    [theme.breakpoints.down(768)]: {
      width: "2.5rem",
    },
    [theme.breakpoints.up(769)]: {
      width: "3rem",
    },
    height: "auto",
  },
  iconLinkedIn: {
    [theme.breakpoints.down(768)]: {
      width: "3rem",
    },
    [theme.breakpoints.up(769)]: {
      width: "3.5rem",
    },
  },
}));

function ResumeContainer() {
  // Material-UI classes
  const classes = useStyles();

  //Links
  const githubLink = "https://github.com/sorasimuon";
  const linkedInLink = "https://www.linkedin.com/in/sorasi-muon/";

  return (
    <Fragment>
      <canvas className={styles.resumeContainer__background} />
      <div className={styles.descriptionContent}>
        <div className={styles.socialLink}>
          <IconButton href={githubLink} className={classes.linkSocialNetwork}>
            <GitHubIcon className={classes.iconSocialNetwork} />
          </IconButton>
          <IconButton href={linkedInLink} className={classes.linkSocialNetwork}>
            <LinkedInIcon
              className={`${classes.iconSocialNetwork} ${classes.iconLinkedIn}`}
            />
          </IconButton>
        </div>
        <CvContent />
      </div>
    </Fragment>
  );
}

export default ResumeContainer;
