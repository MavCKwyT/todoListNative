import "./header.css";

const header = () => {
  const path = "./src/components/header/header.html";
  fetch(path)
    .then(response => {
      return response.text();
    }).then(data => {
      document.getElementById("root").innerHTML = data;
    });
};

export default header();
