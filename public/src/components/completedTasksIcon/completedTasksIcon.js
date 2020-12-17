import "./completedTasksIcon.css";
import { createElem } from "../../functions/createElem";

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
}
completedTasksIcon();
