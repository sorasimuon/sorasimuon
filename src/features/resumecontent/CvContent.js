import React, { Fragment, useEffect, useCallBack, useState } from "react";
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

const cvContent = [
  {
    type: "text",
    label: "ABOUT ME",
    text: [
      "I am Sorasi, I have been working for six years and a half as a Front Office IT Application Support in investment banking. The past months, I spent my time to devlopment skills in Web programming. So today I have the ambition to move my career to more technical position and ideally as a Full Stack Web Developper",
      "I am dynamic, excited by new technologies and concepts, and I like working within a team where sharing and good communication are keys for successful projects.",
    ],
  },
  {
    type: "card",
    label: "EXPERIENCE",
    text: [
      {
        label:
          "FRONT OFFICE IT APPLICATION SUPPORT AND DEVELOPPER - TRADING VOLATILITY",
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
        period: "PARIS 04/2012 - 09/2012",
        description: "Develop the customer portal for the company website",
      },
    ],
  },
  {
    type: "text",
    label: "TECHNICAL SKILLS",
    text: [
      "> HTML5",
      "> ReactJS",
      "> Python3",
      "> Git",
      "> CSS3",
      "> Redux",
      "> Flask",
      "> Shell Scripting",
      "> Material-UI",
      "> Node.js",
      "> MySQL",
      "> Unix Commands",
      "> Javascript",
      "> Jest",
      "> Mongo DB",
      "> VBA",
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

  // const [activeStep, setActiveStep] = React.useState(0);

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

  return (
    <Fragment>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={size.width <= 1920 ? 50 : (50 * 3) / 5}
        // naturalSlideHeight={40}
        isPlaying={true}
        interval={5000}
        totalSlides={maxSteps}
        className={styles.mobileStepper}
      >
        <Slider>
          {cvContent.map((step, index) => (
            <Slide
              key={uuidv4()}
              index={index}
              innerClassName={styles.cvContent}
            >
              <h3 style={{ flex: 0.2 }}>{step.label}</h3>
              <div
                style={{
                  flex: 1,
                  display: "grid",
                  gridTemplateColumns: `repeat(${
                    step["text"].length > 6 ? 4 : step["text"].length
                  }, 1fr [row])`,
                  gridColumnGap: step["type"] === "card" ? "6rem" : "2rem",
                }}
              >
                {step["type"] === "text" &&
                  step["text"].map((text, index) => (
                    <p key={uuidv4()}>{text}</p>
                  ))}
                {step["type"] === "card" &&
                  step["text"].map((text) => (
                    <div key={uuidv4()} className={styles.card}>
                      <h4>{text.label}</h4>
                      <h5>{text.company}</h5>
                      <h5>{text.period}</h5>
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
                      <h4 style={{ textAlign: "center" }}>{text.label}</h4>
                      <p>{text.description}</p>
                    </div>
                  ))}
              </div>
            </Slide>
          ))}
        </Slider>
        <div className={styles.carousselController}>
          <ButtonBack className={styles.carousselButton}>
            <KeyboardArrowLeft style={{ color: "inherit" }} />
          </ButtonBack>
          <ButtonPlay className={styles.carousselButton}>
            <PlayArrowIcon style={{ color: "inherit" }} />
          </ButtonPlay>
          <ButtonNext className={styles.carousselButton}>
            <KeyboardArrowRight style={{ color: "inherit" }} />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </Fragment>
  );
}

export default CvContent;
