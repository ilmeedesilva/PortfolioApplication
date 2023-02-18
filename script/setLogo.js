const logoInput = document.querySelector(
  '.logo_uploader_wrapper input[type="file"]'
);
const logoClick = document.querySelector(".logo_uploader_wrapper");

const clearInputFields = () => {};

const displayPopUp = (res) => {
  const header1 = document.querySelector(".status_descrip h6");
  const detail = document.querySelector(".status_descrip p");
  const background = document.querySelector(".status_popup_wrapper");
  const icon = document.querySelector(".status_popup_wrapper .status_icon img");

  if (res.includes("success")) {
    background.style.backgroundColor = "#75cf0f";
    icon.src = "../../resource/icon/success.png";
    header1.innerHTML = "SUCCESS";
    detail.innerHTML = "SUCCESSFULLY UPLOADED";
  } else {
    background.style.backgroundColor = "#e9374d";
    icon.src = "../../resource/icon/fail.png";
    header1.innerHTML = "FAILED";
    detail.innerHTML = "SOMTHING WENT WRONG! PLEASE TRY AGAIN";
  }
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  document
    .querySelector(".status_popup_wrapper")
    .classList.remove("popup_hide");
  document.querySelector(".status_popup_wrapper").classList.add("popup_show");
  setTimeout(function () {
    document
      .querySelector(".status_popup_wrapper")
      .classList.remove("popup_show");
    document.querySelector(".status_popup_wrapper").classList.add("popup_hide");
  }, 4000);
};

const selectedLogoFile = (doc) => {
  const file = doc.files[0];
  const fileType = file.type;
  const fileSize = file.size;
  const filesizeinMB = (file.size / 1000).toFixed(2);
  document.querySelector(
    ".file_name"
  ).innerHTML = `${file.name}, size: ${filesizeinMB} KB`;
  if (fileType) {
    document.querySelector(".error_logo").innerHTML = "*Please select an image";
  }
  if (fileType !== "image/jpeg" && fileType !== "image/png") {
    document.querySelector(".error_logo").innerHTML =
      "*Invalid file type, only jpeg and png are allowed";
    return;
  } else if (fileSize > 1000000) {
    document.querySelector(".error_logo").innerHTML =
      "*File size must be less than 1MB";
  } else {
    document.querySelector(".error_logo").innerHTML = "";
  }
};

logoClick.addEventListener("click", (e) => {
  logoInput.click();
});

document.querySelector(".logo_save_btn").addEventListener("click", (e) => {
  e.preventDefault();
  if (!logoInput.value) {
    document.querySelector(".error_logo").innerHTML = "*Please select an image";
  } else {
    document.querySelector(".error_logo").innerHTML = "";
    const selectedFile = logoInput.files[0];
    const formData = new FormData();
    formData.append("image", selectedFile);

    fetch("../../db/updateLogo.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        displayPopUp(result);

        // displayPopUp(result);
        // if (result.includes("success")) {

        // } else {
        //   alert("Failed to save data");
        // }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
