import React from "react";
import { v4 as uuidv4 } from "uuid";

// Import Material UI + Styling element
import styles from "./ProjectComponent.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateRows: "1fr [row1] 1fr [row2] 60px [row3]",
    borderRadius: 6,
    boxShadow: "0px 2px 2px rgba(150,150,150,0.5)",
    backgroundColor: "white",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "rgb(212, 219, 255)",
      transform: "scale(1.02)",
      transition: "transform 100ms ease-in-out",
      boxShadow: "0px 2px 10px rgba(150,150,150,0.5)",
    },
    "&:visited": {
      textDecoration: "none",
    },
  },
  media: {
    width: "100%",
    height: "50%",
    objectFit: "stretch",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    // filter: "brightness(1.2)",
  },
  cardButtons: {
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
  },
  cardDescription: {
    padding: 20,
    display: "grid",
    gridTemplateRows: "0.2fr [row1] 1fr [row2]",
  },
});

function ProjectComponent({ content }) {
  const classes = useStyles();

  // return (
  //   <a href={content.link} className={classes.root}>
  //     <img className={classes.media} src={content.image} alt={content.label} />
  //     <div className={classes.cardDescription}>
  //       <h4>{content.label}</h4>
  //       <p>{content.description}</p>
  //     </div>

  //     <Button size="medium" color="secondary" href={content.github}>
  //       GitHub Link &gt;&gt;&gt;
  //     </Button>
  //   </a>
  // );
  return (
    <a href={content.link} style={{ textDecoration: "none" }}>
      <div className={styles.projectComponent}>
        {/* <img
          className={styles.projectComponent__media}
          src={content.image}
          alt={content.label}
        /> */}
        <div className={classes.projectComponent__cardDescription}>
          <h3>{content.label}</h3>
          <p>{content.description}</p>
          <Button size="medium" color="secondary" href={content.github}>
            GitHub Link &gt;&gt;&gt;
          </Button>
        </div>
      </div>
    </a>
  );
}

export default ProjectComponent;
