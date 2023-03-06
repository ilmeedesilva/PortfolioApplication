const loader = document.querySelector(".loader");

const isLoading = (status) => {
  const loaderWrapper = document.createElement("div");
  loaderWrapper.classList.add("loader_gray_wrapper");

  const loaderSvg = document.createElement("div");
  loaderSvg.classList.add("loader_svg");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "50");
  svg.setAttribute("height", "50");

  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("cx", "25");
  circle.setAttribute("cy", "25");
  circle.setAttribute("r", "20");
  circle.setAttribute("stroke", "gray");
  circle.setAttribute("stroke-width", "5");
  circle.setAttribute("fill", "transparent");
  circle.setAttribute("stroke-dasharray", "5,5");
  circle.setAttribute("transform", "rotate(-90 25 25)");

  const animateTransform = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "animateTransform"
  );
  animateTransform.setAttribute("attributeName", "transform");
  animateTransform.setAttribute("attributeType", "XML");
  animateTransform.setAttribute("type", "rotate");
  animateTransform.setAttribute("from", "0 25 25");
  animateTransform.setAttribute("to", "360 25 25");
  animateTransform.setAttribute("dur", "1s");
  animateTransform.setAttribute("repeatCount", "indefinite");

  circle.appendChild(animateTransform);
  svg.appendChild(circle);
  loaderSvg.appendChild(svg);
  loaderWrapper.appendChild(loaderSvg);

  const loader = document.querySelector(".loader");
  loader.appendChild(loaderWrapper);

  status ? (loader.style.display = "block") : (loader.style.display = "none");
};
