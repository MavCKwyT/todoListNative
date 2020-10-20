import "./sidebar.css";

const sidebar = () => {
  const path = "./src/components/sidebar/sidebar.html";
  fetch(path)
    .then(response => {
      return response.text();
    }).then(data => {
      document.getElementById("root").innerHTML = data;
    });
};

export default sidebar();
