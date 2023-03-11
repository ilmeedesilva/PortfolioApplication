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

const aboutPageDescriptionInput = document.getElementById(
  "about_page_description"
);
const aboutCoverImgInput = document.getElementById("about_cover_image-upload");
const selectedAboutCoverImgView = document.querySelector(
  ".selected_img_about_view"
);
const uploadAboutImageCoverError = document.querySelector(
  ".add_about_cover_img_err"
);
const aboutPageDescErrorMessages = document.querySelector(
  ".update_about_desc_error"
);
const updateAboutPageSave = document.getElementById("about_cover_page_save");

selectedAboutCoverImgView.style.display = "none";


aboutCoverImgInput.addEventListener("change", () => {
  const file = aboutCoverImgInput.files[0];
  const reader = new FileReader();

  // Check if a file was selected
  if (file) {
    // Check if the file type is JPG, JPEG, or PNG
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png"
    ) {
      // Check if the file size is less than 1MB
      if (file.size <= 1048576) {
        reader.readAsDataURL(file);
        reader.onload = () => {
          // Create a new image object and set the onload event handler
          const img = new Image();
          img.onload = () => {
            if (img.width > 300) {
              selectedAboutCoverImgView.style.backgroundImage = `url('${reader.result}')`;
              selectedAboutCoverImgView.style.display = "block";
              uploadAboutImageCoverError.textContent = "";
            } else {
              uploadAboutImageCoverError.textContent =
                "Please select an image with a width greater than 300px.";
                selectedAboutCoverImgView.style.display = "none";
            }
          };
          img.src = reader.result;
        };
      } else {
        uploadAboutImageCoverError.textContent =
          "Please select an image with a file size less than 1MB.";
        selectedAboutCoverImgView.style.display = "none";
      }
    } else {
      uploadAboutImageCoverError.textContent =
        "Please select an image of type JPG, JPEG, or PNG.";
      selectedAboutCoverImgView.style.display = "none";
    }
  } else {
    selectedAboutCoverImgView.style.display = "none";
  }
});

updateAboutPageSave.addEventListener("click", () => {
  const about_update_id = updateAboutPageSave.getAttribute("data-pk");
  // errorMessages.forEach((errorMessage) => {
  //   errorMessage.textContent = "";
  // });

  const description = aboutPageDescriptionInput.value;
  const image = aboutCoverImgInput.files[0];
  let isInvalidIMG = false;
  if (!image && !about_update_id) {
    uploadAboutImageCoverError.textContent = "*Please select an image";
  } else if (
    image &&
    !image.type.includes("jpeg") &&
    !image.type.includes("png")
  ) {
    uploadAboutImageCoverError.textContent = "*Please select a JPEG or PNG image";
    isInvalidIMG = true;
  } else if (image && image.size > 1000000) {
    uploadAboutImageCoverError.textContent = "*The image must be less than 1MB";
    isInvalidIMG = true;
  } else {
    uploadAboutImageCoverError.textContent = "";
  }

  if (description.trim() === "") {
    aboutPageDescErrorMessages.textContent = "*Please enter a description";
  } else if (description.length <= 199 || description.length > 500) {
    aboutPageDescErrorMessages.textContent =
      "*The description must be at least 200 characters long and less than 500 characters";
  } else {
    aboutPageDescErrorMessages.textContent = "";
  }

  if (about_update_id && description && aboutPageDescErrorMessages.textContent=="" && !isInvalidIMG) {
    if (image) {
      const formData = new FormData();
      formData.append("description", description);
      formData.append("image", image);

      fetch("../../db/updateAbout.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.text())
        .then((result) => {
          console.log("result = ", result);
          displayPopUp(result);
          // if (result.includes("success")) {

          // } else {
          //   alert("Failed to save data");
          // }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      const formData = new FormData();
      formData.append("description", description);
      formData.append("id", parseInt(about_update_id));
      fetch("../../db/updateAboutPageById.php", {
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
  }

  if (
    !about_update_id &&
    !uploadAboutImageCoverError.textContent &&
    !aboutPageDescErrorMessages.textContent
  ) {
    const formData = new FormData();
    formData.append("description", description);
    formData.append("image", image);

    fetch("../../db/updateAbout.php", {
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


// const descAbout = document.querySelector('textarea[name="aboutDesc"]');

// const submit_button_about = document.querySelector(".saveAbout");

// const err_desc_about = document.querySelector(".desc_error_about");

// const selectedFileAbout = (doc) => {
//   const file = doc.files[0];
//   const fileType = file.type;
//   const fileSize = file.size;
//   const filesizeinMB = (file.size / 1000).toFixed(2);
//   document.querySelector(
//     ".file_name"
//   ).innerHTML = `${file.name}, size: ${filesizeinMB} KB`;
//   if (fileType) {
//     document.querySelector(".error_img_about").innerHTML =
//       "*Please select an image";
//   }
//   if (fileType !== "image/jpeg" && fileType !== "image/png") {
//     document.querySelector(".error_img_about").innerHTML =
//       "*Invalid file type, only jpeg and png are allowed";
//     return;
//   } else if (fileSize > 1000000) {
//     document.querySelector(".error_img_about").innerHTML =
//       "*File size must be less than 1MB";
//   } else {
//     document.querySelector(".error_img_about").innerHTML = "";
//   }
// };

// aboutClick.addEventListener("click", (e) => {
//   aboutInput.click();
// });



// document.querySelector(".saveAbout").addEventListener("click", (e) => {
//   e.preventDefault();
//   const err_img_about = document.querySelector(".error_img_about");
//   if (!aboutInput.value) {
//     err_img_about.innerHTML = "*Please select an image";
//   } else {
//     err_img_about.innerHTML = "";
//   }
//   if (!descAbout.value) {
//     err_desc_about.innerHTML = "*Description cannot be empty";
//   }else if (descAbout.value.length <= 199 || descAbout.value.length > 1000) {
//     err_desc_about.innerHTML =
//       "*About Description should contain more than 200 characters and less than 1000 characters";} 
//   else {
//     err_desc_about.innerHTML = "";
//   }
//   if (!err_desc_about.innerHTML && !err_img_about.innerHTML) {
//     document.querySelector(".error_img_about").innerHTML = "";
//     const selectedFileAbout1 = aboutInput.files[0];
//     const formData = new FormData();
//     formData.append("descAbout", descAbout.value);
//     formData.append("image", selectedFileAbout1);

//     fetch("../../db/updateAbout.php", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => response.text())
//       .then((result) => {
//         displayPopUp(result);

//         // displayPopUp(result);
//         // if (result.includes("success")) {

//         // } else {
//         //   alert("Failed to save data");
//         // }
//       })
//       .catch((error) => {
//         alert(error);
//       });
//   }
// });

// // document.querySelector(".clearAbout").addEventListener("click", (e) => {
// //   e.preventDefault();

// //   descAbout.value = "";
// //   aboutInput.value = "";
// //   document.querySelector(".file_name").innerHTML = "";
// // });
