import React, { Fragment } from "react";
import ProjectComponent from "./projectcomponent/ProjectComponent";
import { v4 as uuidv4 } from "uuid";

// Import Material UI + Styling
import expenseImage from "./images/Expenses.PNG";
import whatsappImage from "./images/Whatsapp2.PNG";
import amazonImage from "./images/Amazon.PNG";
import styles from "./ProjectContainer.module.css";

const projects = [
  {
    label: "WALLET",
    image: expenseImage,
    description:
      "It is a web application allowing the user to keep track of his daily expenses. The backend is an API to collect data from a MongoDB database.",
    github: "https://github.com/sorasimuon/Expenses",
    link: "https://sorasimuon.github.io/Expenses/",
  },
  {
    label: "AMAZON CLONE",
    image: amazonImage,
    source: "https://challenge-22824.web.app/",
    description:
      "It is an e-commerce platform with Amazon website design which allows users to simulate purchase of products using Stripe payment API.",
    github: "https://github.com/sorasimuon/amazon-clone",
    link: "https://challenge-22824.firebaseapp.com/",
  },
  {
    label: "WHATS'APP CLONE",
    image: whatsappImage,
    source: "https://github.com/sorasimuon/Expenses",
    description:
      "It is a web application allowing the user to communicate with the other registered users.",
    github: "https://github.com/sorasimuon/whatsapp-clone",
    link: "https://sorasimuon.github.io/whatsapp-clone/",
  },
];

function ProjectContainer() {
  return (
    <Fragment>
      <canvas className={styles.projectContainer__background} />
      <div className={styles.projectContainer}>
        <h2>PROJECTS</h2>
        <div className={styles.projectContainer__canvasGreen}></div>
        {projects.map((content, index) => (
          <ProjectComponent key={uuidv4()} content={content} index={index} />
        ))}
      </div>
    </Fragment>
  );
}

export default ProjectContainer;
