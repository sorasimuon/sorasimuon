import React, { Fragment } from "react";

// IMport Material UI + Styling
import styles from "./ContactDetails.module.css";
import { makeStyles } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  icon: {},
}));

function ContactDetails() {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={styles.contactDetails__bckg} />
      <div className={styles.contactDetails__main}>
        <h3 style={{ color: "white", marginTop: "auto" }}>CONTACT ME</h3>
        <div className={styles.contactDetails__textArea}>
          <PhoneIcon fontSize="large" />
          <p className={styles.text}>+33 (0)6 09 45 95 30</p>
          <EmailIcon fontSize="large" />
          <p className={styles.text}>sorasi.muon@gmail.com</p>
        </div>
      </div>
    </Fragment>
  );
}

export default ContactDetails;
