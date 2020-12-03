import "../../functions/createElem";
import "./mainFrame.css";
import { createElem } from "../../functions/createElem";

const mainFrameHTML = `
`;

export function mainFrame() {
  createElem(["main", "mainFrame", "mainFrame", "mainWrapper"], mainFrameHTML);
}
mainFrame();
