const fileInput = document.querySelector('input[type="file"]');
const label = document.querySelector(".img_uploader_wrapper");
const fileName = document.querySelector(".img_uploader .file_name");

const imgErrorTxt = document.querySelector(".img_uploader .error_img");

const projName = document.querySelector(
  '.form_wrapper input[name="projectName"]'
);
const projDate = document.querySelector('.form_wrapper input[name="date"]');
const projDesc = document.querySelector('.form_wrapper textarea[name="descr"]');

const projNameErro = document.querySelector(".proj_error");
const dateErro = document.querySelector(".date_error");
const descNameErro = document.querySelector(".desc_error");

const saveBtn = document.querySelector(".form_wrapper .save_btn");

const displayPopUp = (res) => {
  const popupmodel = document.querySelector(".status_popup_wrapper");
  const header1 = document.querySelector(".status_descrip h6");
  const detail = document.querySelector(".status_descrip p");
  const background = document.querySelector(".status_popup_wrapper");
  const icon = document.querySelector(".status_popup_wrapper .status_icon img");

  if (res.includes("success")) {
    background.style.backgroundColor = "#75cf0f";
    icon.src = "../../resource/icon/success.png";
    header1.innerHTML = "SUCCESS";
    detail.innerHTML = "NEW PROJECT ADDED SUCCESSFULlY";
  } else {
    background.style.backgroundColor = "#e9374d";
    icon.src = "../../resource/icon/fail.png";
    header1.innerHTML = "FAILED";
    detail.innerHTML = "SOMTHING WHENT WRONG! PLEASE TRY AGAIN";
  }
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  popupmodel.classList.remove("popup_hide");
  popupmodel.classList.add("popup_show");
  setTimeout(function () {
    popupmodel.classList.remove("popup_show");
    popupmodel.classList.add("popup_hide");
  }, 4000);
};

label.addEventListener("click", (e) => {
  fileInput.click();
});

const selectedFile = (doc) => {
  const file = doc.files[0];
  const fileType = file.type;
  const fileSize = file.size;
  const filesizeinMB = (file.size / 1000).toFixed(2);
  fileName.innerHTML = `${file.name}, size: ${filesizeinMB} KB`;
  if (fileType) {
    imgErrorTxt.innerHTML = "*Must include an image";
  }
  if (fileType !== "image/jpeg" && fileType !== "image/png") {
    imgErrorTxt.innerHTML = "*Invalid file type, only jpeg and png are allowed";
    return;
  } else if (fileSize > 1000000) {
    imgErrorTxt.innerHTML = "*File size must be less than 1MB";
  } else {
    imgErrorTxt.innerHTML = "";
  }
};

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedDate = new Date(projDate.value);
  const currentDate = new Date();

  if (!projName.value) {
    projNameErro.innerHTML = "*project name cannont be empty";
  } else {
    projNameErro.innerHTML = "";
  }
  if (!projDate.value) {
    dateErro.innerHTML = "*project date cannont be empty";
  } else if (selectedDate < currentDate) {
    dateErro.innerHTML = "*Date cannot be a future date";
  } else {
    dateErro.innerHTML = "";
  }
  if (!projDesc.value) {
    descNameErro.innerHTML = "*Description cannot be empty";
  } else if (projDesc.value < 10 || projDesc.value > 500) {
    descNameErro.innerHTML =
      "*Description should contain more than 10 characters and less than 500 characters";
  } else {
    descNameErro.innerHTML = "";
  }
  if (!fileInput.value) {
    imgErrorTxt.innerHTML = "*Must include an image";
  } else {
    imgErrorTxt.innerHTML = "";
  }

  if (
    !projNameErro.innerHTML &&
    !dateErro.innerHTML &&
    !descNameErro.innerHTML &&
    !imgErrorTxt.innerHTML
  ) {
    const selectedFile = fileInput.files[0];
    const formData = new FormData();
    formData.append("projectName", projName.value);
    formData.append("date", projDate.value);
    formData.append("descr", projDesc.value);
    formData.append("image", selectedFile);

    fetch("../../db/addProject.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        displayPopUp(result);
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
