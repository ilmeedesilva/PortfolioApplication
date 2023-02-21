const logoutDiv = document.querySelector(".logo_out_conf");
const logoutBtn = document.querySelector(".logout_wrapper");
const logoutYes = document.querySelector(".btnYes");
const logoutNo = document.querySelector(".btnNo");

logoutBtn.addEventListener("click", () => {
  console.log("logoutBtn");
  logoutDiv.classList.remove("deactive");
  document.querySelector("body").style.overflow = "hidden";
});

logoutYes.addEventListener("click", () => {
  document.location.href = "../pages/home.php";
  logoutDiv.classList.add("deactive");
  document.querySelector("body").style.overflow = "";
});

logoutNo.addEventListener("click", () => {
  logoutDiv.classList.add("deactive");
  document.querySelector("body").style.overflow = "";
});
