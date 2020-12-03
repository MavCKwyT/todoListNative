export const createElem = (elemProperty, elemHTML) => {
  let [tagName, className, elemId, targetId] = elemProperty; // tagName = arr[0], ClassName = arr[1] etc...

  tagName = document.createElement(tagName);
  tagName.className = className;
  tagName.id = elemId;
  tagName.innerHTML = elemHTML;

  document.getElementById(targetId).append(tagName);
};

//     <form>
//     <label>Username</label>
//     <input type="text">
//     <label>Password</label>
//     <input type="password">
//     <button type="submit">sign up</button>
// </form>
// </div>
