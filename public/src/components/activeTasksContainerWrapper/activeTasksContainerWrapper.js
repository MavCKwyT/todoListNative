import { createElem } from "../../functions/createElem";

const activeTasksContainerWrapperHTML = `

`;

export const activeTasksContainerWrapper = () => {
  createElem(
    [
      "div",
      "activeTasksContainerWrapper",
      "activeTasksContainerWrapper",
      "mainFrame"
    ],
    activeTasksContainerWrapperHTML
  );
};
activeTasksContainerWrapper();
