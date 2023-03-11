const visionPageDescriptionInput = document.getElementById(
  "vision_page_description"
);
const visionCoverImgInput = document.getElementById(
  "vision_cover_image-upload"
);
const selectedVisionCoverImgView = document.querySelector(
  ".selected_img_vision_view"
);
const uploadVisionImageCoverError = document.querySelector(
  ".add_vision_cover_img_err"
);
const visionPageDescErrorMessages = document.querySelector(
  ".update_vision_desc_error"
);
const updateVisionPageSave = document.getElementById("vision_page_save");

selectedVisionCoverImgView.style.display = "none";

visionCoverImgInput.addEventListener("change", () => {
  const file = visionCoverImgInput.files[0];
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
            if (img.width > 100) {
              selectedVisionCoverImgView.style.backgroundImage = `url('${reader.result}')`;
              selectedVisionCoverImgView.style.display = "block";
              uploadVisionImageCoverError.textContent = "";
            } else {
              uploadVisionImageCoverError.textContent =
                "Please select an image with a width greater than 100px.";
              selectedVisionCoverImgView.style.display = "none";
            }
          };
          img.src = reader.result;
        };
      } else {
        uploadVisionImageCoverError.textContent =
          "Please select an image with a file size less than 1MB.";
        selectedVisionCoverImgView.style.display = "none";
      }
    } else {
      uploadVisionImageCoverError.textContent =
        "Please select an image of type JPG, JPEG, or PNG.";
      selectedVisionCoverImgView.style.display = "none";
    }
  } else {
    selectedVisionCoverImgView.style.display = "none";
  }
});

updateVisionPageSave.addEventListener("click", () => {
  const vision_update_id = updateVisionPageSave.getAttribute("data-pk");
  // errorMessages.forEach((errorMessage) => {
  //   errorMessage.textContent = "";
  // });

  const description = visionPageDescriptionInput.value;
  const image = visionCoverImgInput.files[0];
  let isInvalidIMG = false;
  if (!image && !vision_update_id) {
    uploadVisionImageCoverError.textContent = "*Please select an image";
  } else if (
    image &&
    !image.type.includes("jpeg") &&
    !image.type.includes("png")
  ) {
    uploadVisionImageCoverError.textContent =
      "*Please select a JPEG or PNG image";
    isInvalidIMG = true;
  } else if (image && image.size > 1000000) {
    uploadVisionImageCoverError.textContent =
      "*The image must be less than 1MB";
    isInvalidIMG = true;
  } else {
    uploadVisionImageCoverError.textContent = "";
  }

  if (description.trim() === "") {
    visionPageDescErrorMessages.textContent = "*Please enter a description";
  } else if (description.length <= 199 || description.length > 500) {
    visionPageDescErrorMessages.textContent =
      "*The description must be at least 200 characters long and less than 500 characters";
  } else {
    visionPageDescErrorMessages.textContent = "";
  }

  if (
    vision_update_id &&
    description &&
    visionPageDescErrorMessages.textContent == "" &&
    !isInvalidIMG
  ) {
    if (image) {
      const formData = new FormData();
      formData.append("description", description);
      formData.append("image", image);

      fetch("../../db/updateVision.php", {
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
      formData.append("id", parseInt(vision_update_id));
      fetch("../../db/updateVisionPageById.php", {
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
    !vision_update_id &&
    !uploadVisionImageCoverError.textContent &&
    !visionPageDescErrorMessages.textContent
  ) {
    const formData = new FormData();
    formData.append("description", description);
    formData.append("image", image);

    fetch("../../db/updateVision.php", {
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

// const visionInput = document.querySelector(
//   '.vision_uploader_wrapper input[type="file"]'
// );
// const visionClick = document.querySelector(".vision_uploader_wrapper");

// const selectedFileVision = (doc) => {
//   const file = doc.files[0];
//   const fileType = file.type;
//   const fileSize = file.size;
//   const filesizeinMB = (file.size / 1000).toFixed(2);
//   document.querySelector(
//     ".vision_img_name"
//   ).innerHTML = `${file.name}, size: ${filesizeinMB} KB`;
//   if (fileType) {
//     document.querySelector(".error_img_vision").innerHTML =
//       "*Please select an image";
//   }
//   if (fileType !== "image/jpeg" && fileType !== "image/png") {
//     document.querySelector(".error_img_vision").innerHTML =
//       "*Invalid file type, only jpeg and png are allowed";
//     return;
//   } else if (fileSize > 1000000) {
//     document.querySelector(".error_img_vision").innerHTML =
//       "*File size must be less than 1MB";
//   } else {
//     document.querySelector(".error_img_vision").innerHTML = "";
//   }
// };

// visionClick.addEventListener("click", (e) => {
//   visionInput.click();
// });

// const descVision = document.querySelector('textarea[name="visionDesc"]');

// const submit_button_vision = document.querySelector(".saveVision");

// const err_desc_vision = document.querySelector(".desc_error_vision");

// document.querySelector(".saveVision").addEventListener("click", (e) => {
//   e.preventDefault();
//   const err_img_vision = document.querySelector(".error_img_vision");
//   if (!visionInput.value) {
//     err_img_vision.innerHTML = "*Please select an image";
//   } else {
//     err_img_vision.innerHTML = "";
//   }
//   if (!descVision.value) {
//     err_desc_vision.innerHTML = "*Description cannot be empty";
//   } else if (descVision.value.length <= 99 || descVision.value.length > 500) {
//     err_desc_vision.innerHTML =
//       "*Vision Description should contain more than 100 characters and less than 500 characters";}
//   else {
//     err_desc_vision.innerHTML = "";
//   }
//   if (!err_desc_vision.innerHTML && !err_img_vision.innerHTML) {
//     document.querySelector(".error_img_vision").innerHTML = "";
//     const selectedFileAbout2 = visionInput.files[0];
//     const formData = new FormData();
//     formData.append("descVision", descVision.value);
//     formData.append("image", selectedFileAbout2);

//     fetch("../../db/updateVision.php", {
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

// // document.querySelector(".clearVision").addEventListener("click", (e) => {
// //   e.preventDefault();

// //   descVision.value = "";
// //   visionInput.value = "";
// //   document.querySelector(".vision_img_name").innerHTML = "";
// // });
