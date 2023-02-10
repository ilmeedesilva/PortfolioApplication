const aboutInput = document.querySelector(
  '.about_uploader_wrapper input[type="file"]'
);
const aboutClick = document.querySelector(".about_uploader_wrapper");

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

const selectedFileAbout = (doc) => {
  const file = doc.files[0];
  const fileType = file.type;
  const fileSize = file.size;
  const filesizeinMB = (file.size / 1000).toFixed(2);
  document.querySelector(
    ".file_name"
  ).innerHTML = `${file.name}, size: ${filesizeinMB} KB`;
  if (fileType) {
    document.querySelector(".error_img_about").innerHTML =
      "*Must include an image";
  }
  if (fileType !== "image/jpeg" && fileType !== "image/png") {
    document.querySelector(".error_img_about").innerHTML =
      "*Invalid file type, only jpeg and png are allowed";
    return;
  } else if (fileSize > 1000000) {
    document.querySelector(".error_img_about").innerHTML =
      "*File size must be less than 1MB";
  } else {
    document.querySelector(".error_img_about").innerHTML = "";
  }
};

aboutClick.addEventListener("click", (e) => {
  aboutInput.click();
});

const descAbout = document.querySelector('textarea[name="aboutDesc"]');

const submit_button_about = document.querySelector(".saveAbout");

const err_desc_about = document.querySelector(".desc_error_about");

// submit_button_about.addEventListener("click", (e) => {
//     e.preventDefault();

//     if(!descAbout.value){
//         err_desc_about.innerHTML = "*Description cannot be empty";
//     }
//     else{
//         err_desc_about.innerHTML = "";
//     }

//       if (
//         !err_desc_about.innerHTML
//         // !(".error_img_about").innerHTML
//       )
//       {
//         const xhr = new XMLHttpRequest();
//         xhr.open("POST", "../../db/updateAbout.php", true);
//         xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//         // xhr.onreadystatechange = function () {
//         //   if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//         //     // const feedback = document.querySelector(".feedback");
//         //     // feedback.innerHTML = xhr.responseText;

//         //     displayPopUp(xhr.responseText);
//         //   }
//         // };
//         xhr.send(
//           `descAbout=${descAbout.value}`// me tiyene value tika php eketa pass karana
//         );
//       }

//   });

document.querySelector(".saveAbout").addEventListener("click", (e) => {
  e.preventDefault();
  const err_img_about = document.querySelector(".error_img_about");
  if (!aboutInput.value) {
    err_img_about.innerHTML = "no image selected";
  } else {
    err_img_about.innerHTML = "";
  }
  if (!descAbout.value) {
    err_desc_about.innerHTML = "*Description cannot be empty";
  } else {
    err_desc_about.innerHTML = "";
  }
  if (!err_desc_about.innerHTML && !err_img_about.innerHTML) {
    document.querySelector(".error_img_about").innerHTML = "";
    const selectedFileAbout1 = aboutInput.files[0];
    const formData = new FormData();
    formData.append("descAbout", descAbout.value);
    formData.append("image", selectedFileAbout1);

    fetch("../../db/updateAbout.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        console.log("result - ", result);
        displayPopUp(result);

        // displayPopUp(result);
        // if (result.includes("success")) {

        // } else {
        //   alert("Failed to save data");
        // }
      })
      .catch((error) => {
        console.log("error - ", error);
        console.error("Error:", error);
      });
  }
});
