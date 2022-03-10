//  toggle button
const toggle = document.querySelector(".toggle");
const linkContainer = document.querySelector(".nav-links-container");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  linkContainer.classList.toggle("show");
});

document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("click", () => {
    toggle.classList.toggle("active");
    linkContainer.classList.toggle("show");
  });
});

//  collapsible
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("collactive");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
