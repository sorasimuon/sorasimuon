import React, { Fragment } from "react";

// IMport Material UI + Styling
import styles from "./ContactContainer.module.css";
import { makeStyles } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import { teal } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: teal[400],
  },
}));

function ContactContainer() {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={styles.contactContainer___background} />
      <div className={styles.contactContainer__content}>
        <h2>CONTACT ME</h2>
        <div className={styles.contactContainer__canvasGreen}></div>
        <div className={styles.contactContainer__textArea}>
          <PhoneIcon className={classes.icon} fontSize="large" />
          <p>+33 (0)6 09 45 95 30</p>
          <EmailIcon className={classes.icon} fontSize="large" />
          <p>sorasi.muon@gmail.com</p>
        </div>
      </div>
    </Fragment>
  );
}

export default ContactContainer;
