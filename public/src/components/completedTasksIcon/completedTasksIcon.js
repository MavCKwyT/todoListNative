import "./completedTasksIcon.css";
import { createElem } from "../../functions/createElem";
import { displayTasks } from "../tasks/tasks";

const completedTasksIconHTML = `
    <div class="completedTasksIcon" id="completedTasksIcon">
            <img class="completedTasksContainerImg" src="../../../../../clipboard.png">
        </a>
    </div>
`;

export function completedTasksIcon() {
  createElem(
    [
      "div",
      "completedTasksIconContainer",
      "completedTasksIconContainer",
      "headerIconsWrapper"
    ],
    completedTasksIconHTML
  );
  const a = document.querySelector(".completedTasksContainerImg");
}
completedTasksIcon();
