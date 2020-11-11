import "../../functions/createElem";
import "./mainFrame.css";
import { createElem } from "../../functions/createElem";

const mainFrameHTML = `
<div class="board" id="board">
    <div class="board__status-bar">
        <div class="board__not-started-tasks-container">
            <span class="board__not-started-tasks-header" id="board__not-started-tasks-header">Not started</span>
        </div>
        <div class="board__in-progress-tasks-container"">
            <span class="board__in-progress-tasks-header">In progress</span>
        </div>        
        <div class="board__completed-tasks-container"">
            <span class="board__completed-tasks-header">Completed</span>
        </div>        
    </div>
    <div class="board__board-group">
         <div class="board__not-started-tasks" id="board__not-started-tasks"></div>
         <div class="board__in-progress-tasks" id="board__in-progress-tasks"></div>
         <div class="board__completed-tasks" id="board__completed-tasks"></div>
    </div>
</div>
`;

export function mainFrame() {
  createElem(["main", "main-frame", "main-frame", "main-wrapper"], mainFrameHTML);
}
mainFrame();
