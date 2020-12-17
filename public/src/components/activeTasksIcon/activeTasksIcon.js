import "./activeTasksIcon.css";
import { createElem } from "../../functions/createElem";
import { onNavigate } from "../../functions/router/routes";

const activeTaskIconHTML = `
    <div class="activeTasksIcon" id="activeTasksIcon">
            <img class="activeTasksContainerImg" src="../../../../../reminders.png">
        </a>
    </div>
`;

export function activeTaskIcon() {
  createElem(
    [
      "div",
      "activeTasksIconContainer",
      "activeTasksIconContainer",
      "headerIconsWrapper"
    ],
    activeTaskIconHTML
  );
  // const icon = document.getElementById("activeTasksIcon");
  // icon.onclick = onNavigate("/activeTasks");
}
activeTaskIcon();
// <a href="#" onclick="onNavigate('/about'); return false;">About</a>
// repeat for other routes also.
