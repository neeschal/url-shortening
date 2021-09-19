const nav = document.getElementsByClassName("mobile")[0];
const active_nav = document.getElementsByClassName("close")[0];
const pas_nav = document.getElementsByClassName("ham")[0];
const navigation = document.getElementsByClassName("navigation")[0];

nav.addEventListener("click", (e) => {
  e.preventDefault();
  active_nav.classList.toggle("hide");
  pas_nav.classList.toggle("hide");
  if (navigation.style.display == "flex") {
    navigation.style.display = "none";
  } else {
    navigation.style.display = "flex";
  }
});
