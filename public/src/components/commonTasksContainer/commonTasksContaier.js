import "./commonTaskContaiers.css";
import { createElem } from "../../functions/createElem";

const commonTasksContainerHTML = `

`;

export const commonTasksContainer = () => {
  createElem(
    [
      "div",
      "commonTasksContainer",
      "commonTasksContainer",
      "mainFrame"
    ],
    commonTasksContainerHTML
  );
};
commonTasksContainer();
