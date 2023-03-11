const tagLinePageDescriptionInput = document.getElementById(
  "tagLine_page_description"
);
const tagLineCoverImgInput = document.getElementById("tagLine_cover_image-upload");
const selectedtagLineCoverImgView = document.querySelector(
  ".selected_img_tagLine_view"
);
const uploadtagLineImageCoverError = document.querySelector(
  ".add_tagLine_cover_img_err"
);
const tagLinePageDescErrorMessages = document.querySelector(
  ".update_tagLine_desc_error"
);
const updatetagLinePageSave = document.getElementById("tagLine_page_save");

selectedtagLineCoverImgView.style.display = "none";


tagLineCoverImgInput.addEventListener("change", () => {
  const file = tagLineCoverImgInput.files[0];
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
              selectedtagLineCoverImgView.style.backgroundImage = `url('${reader.result}')`;
              selectedtagLineCoverImgView.style.display = "block";
              uploadtagLineImageCoverError.textContent = "";
            } else {
              uploadtagLineImageCoverError.textContent =
                "Please select an image with a width greater than 100px.";
                selectedtagLineCoverImgView.style.display = "none";
            }
          };
          img.src = reader.result;
        };
      } else {
        uploadtagLineImageCoverError.textContent =
          "Please select an image with a file size less than 1MB.";
        selectedtagLineCoverImgView.style.display = "none";
      }
    } else {
      uploadtagLineImageCoverError.textContent =
        "Please select an image of type JPG, JPEG, or PNG.";
      selectedtagLineCoverImgView.style.display = "none";
    }
  } else {
    selectedtagLineCoverImgView.style.display = "none";
  }
});

updatetagLinePageSave.addEventListener("click", () => {
  const tagLine_update_id = updatetagLinePageSave.getAttribute("data-pk");
  // errorMessages.forEach((errorMessage) => {
  //   errorMessage.textContent = "";
  // });

  const description = tagLinePageDescriptionInput.value;
  const image = tagLineCoverImgInput.files[0];
  let isInvalidIMG = false;
  if (!image && !tagLine_update_id) {
    uploadtagLineImageCoverError.textContent = "*Please select an image";
  } else if (
    image &&
    !image.type.includes("jpeg") &&
    !image.type.includes("png")
  ) {
    uploadtagLineImageCoverError.textContent = "*Please select a JPEG or PNG image";
    isInvalidIMG = true;
  } else if (image && image.size > 1000000) {
    uploadtagLineImageCoverError.textContent = "*The image must be less than 1MB";
    isInvalidIMG = true;
  } else {
    uploadtagLineImageCoverError.textContent = "";
  }

  if (description.trim() === "") {
    tagLinePageDescErrorMessages.textContent = "*Please enter a description";
  } else if (description.length <= 199 || description.length > 500) {
    tagLinePageDescErrorMessages.textContent =
      "*The description must be at least 200 characters long";
  } else {
    tagLinePageDescErrorMessages.textContent = "";
  }

  if (tagLine_update_id && description && tagLinePageDescErrorMessages.textContent=="" && !isInvalidIMG) {
    if (image) {
      const formData = new FormData();
      formData.append("description", description);
      formData.append("image", image);

      fetch("../../db/updateTagLine.php", {
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
      formData.append("id", parseInt(tagLine_update_id));
      fetch("../../db/updateTagLinePageById.php", {
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
    !tagLine_update_id &&
    !uploadtagLineImageCoverError.textContent &&
    !tagLinePageDescErrorMessages.textContent
  ) {
    const formData = new FormData();
    formData.append("description", description);
    formData.append("image", image);

    fetch("../../db/updateTagLine.php", {
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




























// const tagLineInput = document.querySelector(
//   '.tagLine_uploader_wrapper input[type="file"]'
// );
// const tagLineClick = document.querySelector(".tagLine_uploader_wrapper");

// const selectedFileTagLine = (doc) => {
//   const file = doc.files[0];
//   const fileType = file.type;
//   const fileSize = file.size;
//   const filesizeinMB = (file.size / 1000).toFixed(2);
//   document.querySelector(
//     ".tagLine_img_name"
//   ).innerHTML = `${file.name}, size: ${filesizeinMB} KB`;
//   if (fileType) {
//     document.querySelector(".error_img_tagLine").innerHTML =
//       "*Please select an image";
//   }
//   if (fileType !== "image/jpeg" && fileType !== "image/png") {
//     document.querySelector(".error_img_tagLine").innerHTML =
//       "*Invalid file type, only jpeg and png are allowed";
//     return;
//   } else if (fileSize > 1000000) {
//     document.querySelector(".error_img_tagLine").innerHTML =
//       "*File size must be less than 1MB";
//   } else {
//     document.querySelector(".error_img_tagLine").innerHTML = "";
//   }
// };

// tagLineClick.addEventListener("click", (e) => {
//   tagLineInput.click();
// });

// const descTagLine = document.querySelector('textarea[name="tagLineDesc"]');

// const submit_button_tagLine = document.querySelector(".saveTagLine");

// const err_desc_tagLine = document.querySelector(".desc_error_tagLine");

// document.querySelector(".saveTagLine").addEventListener("click", (e) => {
//   e.preventDefault();
//   const err_img_tagLine = document.querySelector(".error_img_tagLine");
//   if (!tagLineInput.value) {
//     err_img_tagLine.innerHTML = "*Please select an image";
//   } else {
//     err_img_tagLine.innerHTML = "";
//   }
//   if (!descTagLine.value) {
//     err_desc_tagLine.innerHTML = "*Description cannot be empty";
//   } else if (descTagLine.value.length <= 99 || descTagLine.value.length > 500) {
//     err_desc_tagLine.innerHTML =
//       "*TagLine Description should contain more than 100 characters and less than 500 characters";}   
//   else {
//     err_desc_tagLine.innerHTML = "";
//   }
//   if (!err_desc_tagLine.innerHTML && !err_img_tagLine.innerHTML) {
//     document.querySelector(".error_img_tagLine").innerHTML = "";
//     const selectedFileTagLine1 = tagLineInput.files[0];
//     const formData = new FormData();
//     formData.append("descTagLine", descTagLine.value);
//     formData.append("image", selectedFileTagLine1);

//     fetch("../../db/updateTagLine.php", {
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

// // document.querySelector(".clearTagLine").addEventListener("click", (e) => {
// //   e.preventDefault();

// //   descTagLine.value = "";
// //   tagLineInput.value = "";
// //   document.querySelector(".tagLine_img_name").innerHTML = "";
// // });
