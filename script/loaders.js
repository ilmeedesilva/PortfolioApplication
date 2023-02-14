const rects = document.querySelectorAll("#skeleton rect");

rects.forEach((rect, index) => {
  if (index % 2 === 0) {
    rect.style.animation = "left-to-right 3s ease-in-out infinite";
  } else if (index % 3 === 0) {
    rect.style.animation = "center-to-right 3s ease-in-out infinite";
  } else {
    rect.style.animation = "right-to-left 3s ease-in-out infinite";
  }
});
