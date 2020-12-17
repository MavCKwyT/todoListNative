import { createElem } from "../../functions/createElem";

const completedTasksContainerWrapperHTML = `
   
`;

export const completedTasksContainerWrapper = () => {
  createElem(
    [
      "div",
      "completedTasksContainerWrapper",
      "completedTasksContainerWrapper",
      "mainFrame"
    ],
    completedTasksContainerWrapperHTML
  );
};
// completedTasksContainerWrapper();
