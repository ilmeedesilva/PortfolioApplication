const mottoPageDescriptionInput = document.getElementById(
  "motto_page_description"
);
const mottoCoverImgInput = document.getElementById("motto_cover_image-upload");
const selectedMottoCoverImgView = document.querySelector(
  ".selected_img_motto_view"
);
const uploadMottoImageCoverError = document.querySelector(
  ".add_motto_cover_img_err"
);
const mottoPageDescErrorMessages = document.querySelector(
  ".update_motto_desc_error"
);
const updateMottoPageSave = document.getElementById("motto_page_save");

selectedMottoCoverImgView.style.display = "none";


mottoCoverImgInput.addEventListener("change", () => {
  const file = mottoCoverImgInput.files[0];
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
              selectedMottoCoverImgView.style.backgroundImage = `url('${reader.result}')`;
              selectedMottoCoverImgView.style.display = "block";
              uploadMottoImageCoverError.textContent = "";
            } else {
              uploadMottoImageCoverError.textContent =
                "Please select an image with a width greater than 100px.";
                selectedMottoCoverImgView.style.display = "none";
            }
          };
          img.src = reader.result;
        };
      } else {
        uploadMottoImageCoverError.textContent =
          "Please select an image with a file size less than 1MB.";
        selectedMottoCoverImgView.style.display = "none";
      }
    } else {
      uploadMottoImageCoverError.textContent =
        "Please select an image of type JPG, JPEG, or PNG.";
      selectedMottoCoverImgView.style.display = "none";
    }
  } else {
    selectedMottoCoverImgView.style.display = "none";
  }
});

updateMottoPageSave.addEventListener("click", () => {
  const motto_update_id = updateMottoPageSave.getAttribute("data-pk");
  // errorMessages.forEach((errorMessage) => {
  //   errorMessage.textContent = "";
  // });

  const description = mottoPageDescriptionInput.value;
  const image = mottoCoverImgInput.files[0];
  let isInvalidIMG = false;
  if (!image && !motto_update_id) {
    uploadMottoImageCoverError.textContent = "*Please select an image";
  } else if (
    image &&
    !image.type.includes("jpeg") &&
    !image.type.includes("png")
  ) {
    uploadMottoImageCoverError.textContent = "*Please select a JPEG or PNG image";
    isInvalidIMG = true;
  } else if (image && image.size > 1000000) {
    uploadMottoImageCoverError.textContent = "*The image must be less than 1MB";
    isInvalidIMG = true;
  } else {
    uploadMottoImageCoverError.textContent = "";
  }

  if (description.trim() === "") {
    mottoPageDescErrorMessages.textContent = "*Please enter a description";
  } else if (description.length <= 199 || description.length > 500) {
    mottoPageDescErrorMessages.textContent =
      "*The description must be at least 200 characters long and less than 500 characters";
  } else {
    mottoPageDescErrorMessages.textContent = "";
  }

  if (motto_update_id && description && mottoPageDescErrorMessages.textContent=="" && !isInvalidIMG) {
    if (image) {
      const formData = new FormData();
      formData.append("description", description);
      formData.append("image", image);

      fetch("../../db/updateMotto.php", {
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
      formData.append("id", parseInt(motto_update_id));
      fetch("../../db/updateMottoPageById.php", {
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
    !motto_update_id &&
    !uploadMottoImageCoverError.textContent &&
    !mottoPageDescErrorMessages.textContent
  ) {
    const formData = new FormData();
    formData.append("description", description);
    formData.append("image", image);

    fetch("../../db/updateMotto.php", {
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
})



































// const mottoInput = document.querySelector(
//   '.motto_uploader_wrapper input[type="file"]'
// );
// const mottoClick = document.querySelector(".motto_uploader_wrapper");

// const selectedFileMotto = (doc) => {
//   const file = doc.files[0];
//   const fileType = file.type;
//   const fileSize = file.size;
//   const filesizeinMB = (file.size / 1000).toFixed(2);
//   document.querySelector(
//     ".motto_img_name"
//   ).innerHTML = `${file.name}, size: ${filesizeinMB} KB`;
//   if (fileType) {
//     document.querySelector(".error_img_motto").innerHTML =
//       "*Must include an image";
//   }
//   if (fileType !== "image/jpeg" && fileType !== "image/png") {
//     document.querySelector(".error_img_motto").innerHTML =
//       "*Invalid file type, only jpeg and png are allowed";
//     return;
//   } else if (fileSize > 1000000) {
//     document.querySelector(".error_img_motto").innerHTML =
//       "*File size must be less than 1MB";
//   } else {
//     document.querySelector(".error_img_motto").innerHTML = "";
//   }
// };

// mottoClick.addEventListener("click", (e) => {
//   mottoInput.click();
// });

// const descMotto = document.querySelector('textarea[name="mottoDesc"]');

// const submit_button_motto = document.querySelector(".saveMotto");

// const err_desc_motto = document.querySelector(".desc_error_motto");

// document.querySelector(".saveMotto").addEventListener("click", (e) => {
//   e.preventDefault();
//   const err_img_motto = document.querySelector(".error_img_motto");
//   if (!mottoInput.value) {
//     err_img_motto.innerHTML = "*Please select an image";
//   } else {
//     err_img_motto.innerHTML = "";
//   }
//   if (!descMotto.value) {
//     err_desc_motto.innerHTML = "*Description cannot be empty";
//   } else if (descMotto.value.length <= 99 || descMotto.value.length > 500) {
//     err_desc_motto.innerHTML =
//       "*Motto Description should contain more than 100 characters and less than 500 characters";}    
//   else {
//     err_desc_motto.innerHTML = "";
//   }
//   if (!err_desc_motto.innerHTML && !err_img_motto.innerHTML) {
//     document.querySelector(".error_img_motto").innerHTML = "";
//     const selectedFileMotto1 = mottoInput.files[0];
//     const formData = new FormData();
//     formData.append("descMotto", descMotto.value);
//     formData.append("image", selectedFileMotto1);

//     fetch("../../db/updateMotto.php", {
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

// // document.querySelector(".clearMotto").addEventListener("click", (e) => {
// //   e.preventDefault();

// //   descMotto.value = "";
// //   mottoInput.value = "";
// //   document.querySelector(".motto_img_name").innerHTML = "";
// // });
