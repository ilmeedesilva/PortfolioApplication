// home main banner text fade in
window.addEventListener("load", function () {
  const banner = document.querySelector(".banner_text_section");
  banner.style.top = "0";
  banner.style.opacity = "1";
});

// home fade in elements
const sectionAreas = document.querySelectorAll(".section_appear");

const view = (div) => {
  return (
    div.getBoundingClientRect().top < window.innerHeight / 1.2 &&
    div.getBoundingClientRect().bottom > window.innerHeight / 3
  );
};

const viewFocus = (sectionArea) => {
  if (view(sectionArea)) {
    sectionArea.classList.add("section_in");
  } else {
    sectionArea.classList.remove("section_in");
  }
};

window.addEventListener("scroll", () => {
  sectionAreas.forEach((sectionArea) => {
    viewFocus(sectionArea);
  });
});
