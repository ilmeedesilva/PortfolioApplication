const allCollapse = document.querySelectorAll(".collapse_section_header");

allCollapse.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.parentElement.classList.toggle("collapse_Section_active");
  });
});
