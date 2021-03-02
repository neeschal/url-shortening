const form = document.getElementById("form");
// const url = document.getElementById("url-link");
const url = document.querySelector(".url-section form .flex input[type=text]");
const error = document.getElementById("error");
const menu = document.getElementById("menu");
const menulist = document.getElementById("menu-list");
const image = document.getElementsByClassName("illustration");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let urlValue = url.value;
  if (urlValue !== "") {
    error.classList.remove("error");
    error.classList.add("hide");
    url.classList.remove("err");
    url.style.border = "none";
  } else {
    error.classList.add("error");
    url.style.border = "1px solid red";
    url.classList.add("err");
    error.classList.remove("hide");
  }
});

menu.addEventListener("click", (e) => {
  e.preventDefault();
  if (menulist.className == "hide") {
    menulist.classList.remove("hide");
  } else {
    menulist.classList.add("hide");
  }
});
