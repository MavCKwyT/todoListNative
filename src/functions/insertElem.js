export const insertElem = (path, elemId) => {
  fetch(path)
    .then(response => {
      return response.text();
    }).then(data => {
      document.getElementById(elemId).innerHTML = data;
    });
};
