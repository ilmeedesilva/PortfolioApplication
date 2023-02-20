const allCollapse = document.querySelectorAll(".collapse_section_header");

const toggleCollapse = (clickedItem) => {
  allCollapse.forEach((item) => {
    const parent = item.parentElement;
    if (item === clickedItem) {
      parent.classList.toggle("collapse_Section_active");
    } else if (parent.classList.contains("collapse_Section_active")) {
      parent.classList.remove("collapse_Section_active");
    }
  });
};

allCollapse.forEach((item) => {
  item.addEventListener("click", () => {
    toggleCollapse(item);
  });
});

window.addEventListener("load", () => {
  const collapseBars = document.querySelectorAll(".collapse_section");
  collapseBars.forEach((bar) => {
    bar.classList.add("page_on_load");
  });
});
