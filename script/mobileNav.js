const navUL = document.querySelector(".top_nav_right");
navUL.addEventListener("click", function () {
  console.log("click");
  navUL.classList.toggle("nav_active");
});
