// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");
body.innerHTML = "Hello";
body.style.fontWeight = "bold";
body.style.color = "white";

function handleResize() {
  if (window.innerWidth >= 800) {
    body.style.backgroundColor = "red";
  } else if (window.innerWidth >= 600 && window.innerWidth < 800) {
    body.style.backgroundColor = "blue";
  } else {
    body.style.backgroundColor = "yellow";
  }
}

window.addEventListener("resize", handleResize);

function init() {
  handleResize();
}

init();
