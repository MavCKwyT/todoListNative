import "../../functions/createElem";
import "./header.css";
import { createElem } from "../../functions/createElem";

export const headerHTML = `
<form class="form">
    <div class="form_inputWrapper">
        <input class="form__addTaskInput" id="form__addTaskInput"
            placeholder="What is in your mind?"
            onfocus="this.placeholder = ''" 
            onblur="this.placeholder = 'What is in your mind?'"
        <input>
    </div>
    <div class="form__addTaskButtonWrapper">
        <button class="form__addTaskButton" id="form__addTaskButton">Add</button>
    </div>
</form>
`;

export function header() {
  createElem(["div", "header", "header", "mainFrame"], headerHTML);
}

header();
