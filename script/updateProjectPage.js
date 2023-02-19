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
  if (projectCoverImgInput.files.length > 0) {
    selectedProjectCoverImgView.style.backgroundImage = `url('${URL.createObjectURL(
      projectCoverImgInput.files[0]
    )}')`;
    selectedProjectCoverImgView.style.display = "block";
  } else {
    selectedProjectCoverImgView.style.display = "none";
  }
});

updateProjectPageSave.addEventListener("click", () => {
  const Project_update_id = updateProjectPageSave.getAttribute("data-pk");
  errorMessages.forEach((errorMessage) => {
    errorMessage.textContent = "";
  });

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

  if (Project_update_id && description && projectPageDescErrorMessages.textContent=="" && !isInvalidIMG) {
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
