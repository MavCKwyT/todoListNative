export const insertElem = (path, elemId, callback = () => {}) => { // todo come up with better way to handle html page
  fetch(path)
    .then(response => {
      return response.text();
    }).then(data => {
      document.getElementById(elemId).innerHTML = data;
      callback();
    });
};
