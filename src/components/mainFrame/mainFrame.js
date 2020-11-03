import "../../functions/createElem";
import "./mainFrame.css";
import { createElem } from "../../functions/createElem";

const mainFrameHTML = `
<div class="sss">hello</div>
`;

export function mainFrame() {
  createElem(["main", "main-frame", "main-frame", "main-wrapper"], mainFrameHTML);
}
mainFrame();
