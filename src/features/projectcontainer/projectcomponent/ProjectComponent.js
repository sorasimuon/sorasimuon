import React from "react";
import { v4 as uuidv4 } from "uuid";

// Import Material UI + Styling element
import styles from "./ProjectComponent.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { PlayCircleFilledWhite } from "@material-ui/icons";
import { teal } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
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
  projectComponent__cardDescription: {
    display: "grid",
    gridTemplateRows: "0.1fr [row1] auto [row2] 1fr [row3] 0.1fr [row4]",
    gridTemplateColumns: "repeat(0.2fr [col1], 0.8fr [col2])",
  },
  projectComponent__label: {
    gridRow: "1/1",
    gridColumn: "1/3",
  },
  projectComponent__synopsis: {
    gridRow: "2/2",
    gridColumn: "1/3",
    color: "white",
    alignSelf: "center",
  },
  projectComponent__stack: {
    gridRow: "3/3",
    gridColumn: "1/3",
    color: "white",
  },
  projectComponent__link: {
    gridRow: "4/4",
    color: "white",
    justifySelf: "center",
    padding: 10,
    backgroundColor: teal[400],
    [theme.breakpoints.down(768)]: {
      fontSize: 8,
    },
    [theme.breakpoints.up(768)]: {
      padding: 20,
    },
    "&:hover": {
      backgroundColor: teal[700],
    },
  },
}));

function ProjectComponent({ content }) {
  const classes = useStyles();
  return (
    <a href={content.link} style={{ textDecoration: "none" }}>
      <div className={styles.projectComponent}>
        {/* <img
          className={styles.projectComponent__media}
          src={content.image}
          alt={content.label}
        /> */}
        <div className={classes.projectComponent__cardDescription}>
          <h3 className={classes.projectComponent__label}>{content.label}</h3>
          <p className={classes.projectComponent__synopsis}>
            {content.description}
          </p>
          <div className={classes.projectComponent__stack}>
            {content["stack"].map((stack) => (
              <p>{stack}</p>
            ))}
          </div>
          <Button
            className={classes.projectComponent__link}
            size="medium"
            href={content.github}
          >
            GitHub Link &gt;&gt;&gt;
          </Button>
          <Button
            className={classes.projectComponent__link}
            size="medium"
            color="white"
            href={content.link}
          >
            DEMO Link &gt;&gt;&gt;
          </Button>
        </div>
      </div>
    </a>
  );
}

export default ProjectComponent;
