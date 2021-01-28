import React, { useEffect, useCallBack, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Import Material UI and styling Element
import styles from "./CvContent.module.css";
import { makeStyles, useTheme } from "@material-ui/core";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import hikingImage from "./Hiking.png";
import basketballImage from "./BasketBall.png";
import squashImage from "./Squash.png";
import tennisImage from "./Tennis.png";
import tableTennisImage from "./TableTennis.png";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ButtonPlay,
} from "pure-react-carousel";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "pure-react-carousel/dist/react-carousel.es.css";
// import Carousel from "nuka-carousel";
import Carousel from "react-material-ui-carousel";

const cvContent = [
  {
    type: "text",
    label: "ABOUT ME",
    text: [
      "I am Sorasi, I have been working for almost seven years as a Front Office IT Application Support in investment banking. Passionate about Web development, I spent the past months learning modern Web programming and especially the MERN stack (Mongo - Express - React - Nodejs). Today I have the ambition to move my career to more technical position and ideally as a Full Stack Web Developper.",
      "I am dynamic, excited by new technologies and concepts, and I like working with peers where team spirit and good communication are keys for successful projects.",
    ],
  },
  {
    type: "card",
    label: "EXPERIENCE",
    text: [
      {
        label:
          "FRONT OFFICE IT APPLICATION SUPPORT AND DEVELOPER - TRADING VOLATILITY",
        company: "SOCIETE GENERALE CIB",
        period: "HONG KONG 10/2017 – 12/2019",
        description:
          "Develop, maintain and provide support level 2 to 3 on applications used by the traders",
      },
      {
        label:
          "FRONT OFFICE APPLICATION SUPPORT – TRADING EQUITIES ET DERIVATIVES",
        company: "SOCIETE GENERALE CIB",
        period: "PARIS  05/2013 – 09/2014 | HONG KONG 10/2014 – 09/017",
        description:
          "Provide assistance and support level 2 on applications used by the traders",
      },
      {
        label: "INTERNSHIP BACK OFFICE SUPPORT / BUSINESS ANALYST CALYPSO",
        company: "BNP PARIBAS ARBITRAGE",
        period: "PARIS 04/2012 - 09/2012",
        description:
          "Provide support level 1 and 2 on the trade settlement tool Calypso",
      },
      {
        label: "INTERNSHIP FULLSTACK WEB DEVELOPER",
        company: "PRIMALIANCE",
        period: "PARIS 05/2011 - 08/2011",
        description: "Develop the customer portal for the company website",
      },
    ],
  },
  {
    type: "list",
    label: "TECHNICAL SKILLS",
    text: [
      "HTML5",
      "ReactJS",
      "Python3",
      "Git",
      "CSS3",
      "Redux",
      "Flask",
      "Shell Scripting",
      "Material-UI",
      "Node.js",
      "MySQL",
      "Unix Commands",
      "Javascript",
      "Jest",
      "Mongo DB",
      "VBA",
    ],
  },
  {
    type: "text",
    label: "KNOWLEDGE",
    text: [
      "> Electronic Trading System",
      "> Equities and Derivatives",
      "> ITIL Certificate level 1",
    ],
  },
  {
    type: "cardPassion",
    label: "PASSIONS",
    text: [
      {
        source: hikingImage,
        label: "Hiking",
      },
      {
        source: basketballImage,
        label: "Basketball",
      },
      {
        source: squashImage,
        label: "Squash",
      },
      {
        source: tennisImage,
        label: "Tennis",
      },
      {
        source: tableTennisImage,
        label: "Table Tennis",
      },
    ],
  },
];

const cvContent2 = [
  {
    type: "text",
    label: "ABOUT ME",
    text: [
      "I am Sorasi, I have been working for almost seven years as a Front Office IT Application Support in investment banking. Passionate about Web development, I spent the past months learning modern Web programming and especially the MERN stack (Mongo - Express - React - Nodejs). Today I have the ambition to move my career to a more technical position and ideally as a Full Stack Web Developper.",
      "I am dynamic, excited by new technologies and concepts, and I like working with peers where team spirit and good communication are keys to successful projects.",
    ],
  },
  {
    type: "card",
    label: "EXPERIENCE",
    text: [
      {
        label:
          "FRONT OFFICE IT APPLICATION SUPPORT AND DEVELOPER - TRADING VOLATILITY",
        company: "SOCIETE GENERALE CIB",
        period: "HONG KONG 10/2017 – 12/2019",
        description:
          "Develop, maintain and provide support level 2 to 3 on applications used by the traders",
      },
      {
        label:
          "FRONT OFFICE APPLICATION SUPPORT – TRADING EQUITIES ET DERIVATIVES",
        company: "SOCIETE GENERALE CIB",
        period: "PARIS  05/2013 – 09/2014 | HONG KONG 10/2014 – 09/017",
        description:
          "Provide assistance and support level 2 on applications used by the traders",
      },
    ],
  },
  {
    type: "card",
    label: "EXPERIENCE",
    text: [
      {
        label: "INTERNSHIP BACK OFFICE SUPPORT / BUSINESS ANALYST CALYPSO",
        company: "BNP PARIBAS ARBITRAGE",
        period: "PARIS 04/2012 - 09/2012",
        description:
          "Provide support level 1 and 2 on the trade settlement tool Calypso",
      },
      {
        label: "INTERNSHIP FULLSTACK WEB DEVELOPPEUR",
        company: "PRIMALIANCE",
        period: "PARIS 05/2011 - 08/2011",
        description: "Develop the customer portal for the company website",
      },
    ],
  },
  {
    type: "list",
    label: "TECHNICAL SKILLS",
    text: [
      "HTML5",
      "ReactJS",
      "Python3",
      "Git",
      "CSS3",
      "Redux",
      "Flask",
      "Shell Scripting",
      "Material-UI",
      "Node.js",
      "MySQL",
      "Unix Commands",
      "Javascript",
      "Jest",
      "Mongo DB",
      "VBA",
    ],
  },
  {
    type: "text",
    label: "KNOWLEDGE",
    text: [
      "> Electronic Trading System",
      "> Equities and Derivatives",
      "> ITIL Certificate level 1",
    ],
  },
  {
    type: "cardPassion",
    label: "PASSIONS",
    text: [
      {
        source: hikingImage,
        label: "Hiking",
      },
      {
        source: basketballImage,
        label: "Basketball",
      },
      {
        source: squashImage,
        label: "Squash",
      },
      {
        source: tennisImage,
        label: "Tennis",
      },
      {
        source: tableTennisImage,
        label: "Table Tennis",
      },
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  stepper: {
    backgroundColor: "inherit",
  },
}));

function CvContent() {
  const classes = useStyles();
  const theme = useTheme();
  const maxSteps = cvContent.length;

  const breakpointsTable = [{}];

  const size = useWindowSize();

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
  }

  if (size.width <= 768) {
    return (
      <div className={styles.mobileStepper}>
        {cvContent.map((step, index) => (
          <div key={uuidv4()} index={index} className={`${styles.cvContent}`}>
            <h2>{step.label}</h2>
            <div className={styles.cvContent__canvasGreen}></div>
            <div
              style={{
                flex: 1,
                display: "grid",
                gridTemplateRows: `repeat(${
                  step["text"].length > 12
                    ? Math.ceil(step["text"].length / 2)
                    : step["text"].length
                }, 1fr [row])`,
                gridTemplateColumns: `repeat(${
                  step["text"].length > 12 ? 2 : 1
                }, 1fr [col])`,
                gridColumnGap: step["type"] === "card" ? "6rem" : "2rem",
              }}
            >
              {step["type"] === "text" &&
                step["text"].map((text, index) => <p key={uuidv4()}>{text}</p>)}
              {step["type"] === "list" &&
                step["text"].map((text, index) => (
                  <p key={uuidv4()}>{`> ` + text}</p>
                ))}
              {step["type"] === "card" &&
                step["text"].map((text) => (
                  <div key={uuidv4()} className={styles.card}>
                    <h3>{text.label}</h3>
                    <h4>
                      {text.company}
                      <br />
                      {text.period}
                    </h4>
                    <p>{text.description}</p>
                  </div>
                ))}
              {step["type"] === "cardPassion" &&
                step["text"].map((text) => (
                  <div key={uuidv4()} className={styles.cardPassion}>
                    <img
                      src={text.source}
                      alt={text.label}
                      className={styles.imagePassion}
                    />
                    <p>{text.label}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <Carousel autoPlay={true} interval={5000} animation="fade">
      {cvContent2.map((step, index) => (
        <div key={uuidv4()} index={index} innerClassName={styles.cvContent}>
          <h2>{step.label}</h2>
          <div className={styles.cvContent__canvasGreen}></div>
          <div
            style={{
              flex: 1,
              display: "grid",
              height: 260,
              gridTemplateColumns: `repeat(${
                step["text"].length > 6 ? 4 : step["text"].length
              }, 1fr [row])`,
              gridColumnGap: step["type"] === "card" ? "6rem" : "2rem",
            }}
          >
            {step["type"] === "text" &&
              step["text"].map((text, index) => <p key={uuidv4()}>{text}</p>)}
            {step["type"] === "list" &&
              step["text"].map((text, index) => (
                <p key={uuidv4()}>{`> ` + text}</p>
              ))}
            {step["type"] === "card" &&
              step["text"].map((text) => (
                <div key={uuidv4()} className={styles.card}>
                  <h3 style={{}}>{text.label}</h3>
                  <h4>
                    {text.company}
                    <br />
                    {text.period}
                  </h4>
                  <p>{text.description}</p>
                </div>
              ))}
            {step["type"] === "cardPassion" &&
              step["text"].map((text) => (
                <div key={uuidv4()} className={styles.cardPassion}>
                  <img
                    src={text.source}
                    alt={text.label}
                    className={styles.imagePassion}
                  />
                  <p style={{ textAlign: "center" }}>{text.label}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default CvContent;
