const projectPageDescriptionInput = document.getElementById(
  "project_page_description"
);
const projectCoverImgInput = document.getElementById("cover_image-upload");
const selectedProjectCoverImgView = document.querySelector(
  ".selected_cover_img_view"
);
const uploadImageCoverError = document.querySelector(
  ".add_new_project_cover_img_err"
);
const projectPageDescErrorMessages = document.querySelector(
  ".update_project_desc_error"
);
const updateProjectPageSave = document.getElementById("project_page_save");

selectedProjectCoverImgView.style.display = "none";

projectCoverImgInput.addEventListener("change", () => {
  const file = projectCoverImgInput.files[0];
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
              selectedProjectCoverImgView.style.backgroundImage = `url('${reader.result}')`;
              selectedProjectCoverImgView.style.display = "block";
              uploadImageCoverError.textContent = "";
            } else {
              uploadImageCoverError.textContent =
                "Please select an image with a width greater than 300px.";
              selectedProjectCoverImgView.style.display = "none";
            }
          };
          img.src = reader.result;
        };
      } else {
        uploadImageCoverError.textContent =
          "Please select an image with a file size less than 1MB.";
        selectedProjectCoverImgView.style.display = "none";
      }
    } else {
      uploadImageCoverError.textContent =
        "Please select an image of type JPG, JPEG, or PNG.";
      selectedProjectCoverImgView.style.display = "none";
    }
  } else {
    selectedProjectCoverImgView.style.display = "none";
  }
});

updateProjectPageSave.addEventListener("click", () => {
  const Project_update_id = updateProjectPageSave.getAttribute("data-pk");
  // errorMessages.forEach((errorMessage) => {
  uploadImageCoverError.textContent = "";
  projectPageDescErrorMessages.textContent = "";
  // });

  const description = projectPageDescriptionInput.value;
  const image = projectCoverImgInput.files[0];
  let isInvalidIMG = false;
  if (!image && !Project_update_id) {
    uploadImageCoverError.textContent = "*Please select an image";
  } else if (
    image &&
    !image.type.includes("jpeg") &&
    !image.type.includes("png")
  ) {
    uploadImageCoverError.textContent = "*Please select a JPEG or PNG image";
    isInvalidIMG = true;
  } else if (image && image.size > 1000000) {
    uploadImageCoverError.textContent = "*The image must be less than 1MB";
    isInvalidIMG = true;
  } else {
    uploadImageCoverError.textContent = "";
  }

  if (description.trim() === "") {
    projectPageDescErrorMessages.textContent = "*Please enter a description";
  } else if (description.length <= 199 || description.length > 1000) {
    projectPageDescErrorMessages.textContent =
      "*The description must be at least 200 characters long";
  } else {
    projectPageDescErrorMessages.textContent = "";
  }

  if (
    Project_update_id &&
    description &&
    projectPageDescErrorMessages.textContent == "" &&
    !isInvalidIMG
  ) {
    if (image) {
      const formData = new FormData();
      formData.append("description", description);
      formData.append("image", image);

      fetch("../../db/updateProject.php", {
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
      formData.append("id", parseInt(Project_update_id));
      fetch("../../db/updateProjectPageById.php", {
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
    !Project_update_id &&
    !uploadImageCoverError.textContent &&
    !projectPageDescErrorMessages.textContent
  ) {
    const formData = new FormData();
    formData.append("description", description);
    formData.append("image", image);

    fetch("../../db/updateProject.php", {
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
