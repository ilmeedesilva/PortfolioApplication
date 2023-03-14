const logoutDiv = document.querySelector(".logo_out_conf");
const logoutBtn = document.querySelector(".logout_wrapper");
const logoutYes = document.querySelector(".btnYes");
const logoutNo = document.querySelector(".btnNo");

logoutBtn.addEventListener("click", () => {
  logoutDiv.classList.remove("deactive");
  document.querySelector("body").style.overflow = "hidden";
});

logoutYes.addEventListener("click", (e) => {
  e.preventDefault();
  // document.location.href = "/";
  logoutDiv.classList.add("deactive");
  document.querySelector("body").style.overflow = "";

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "../../db/logout.php");
  xhr.onload = function () {
    window.location.href = "../../src/admin/login.php";
  };
  xhr.send();

  document.cookie =
    "PHPSESSID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  sessionStorage.clear();
  localStorage.clear();
});

logoutNo.addEventListener("click", (e) => {
  e.preventDefault();
  logoutDiv.classList.add("deactive");
  document.querySelector("body").style.overflow = "";
});
