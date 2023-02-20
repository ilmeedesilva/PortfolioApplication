const projectNameInput = document.getElementById("project-name");
const finishDateInput = document.getElementById("finish-date");
const descriptionInput = document.getElementById("description");
const imageInput = document.getElementById("image-upload");
const selectedImgView = document.querySelector(".selected_img_view");
const addNewProjectImgErr = document.querySelector(".add_new_project_img_err");
const errorMessages = document.querySelectorAll(".error-msg");

const saveButton = document.getElementById("save");
const clear_button = document.querySelector(".add_project_clear_btn");

selectedImgView.style.display = "none";

const clearInputFields = () => {
  projectNameInput.value = "";
  finishDateInput.value = "";
  descriptionInput.value = "";
  imageInput.value = "";
  selectedImgView.value = "";
};

imageInput.addEventListener("change", () => {
  if (imageInput.files.length > 0) {
    selectedImgView.style.backgroundImage = `url('${URL.createObjectURL(
      imageInput.files[0]
    )}')`;
    selectedImgView.style.display = "block";
  } else {
    selectedImgView.style.display = "none";
  }
});

saveButton.addEventListener("click", () => {
  errorMessages.forEach((errorMessage) => {
    errorMessage.textContent = "";
  });

  const projectName = projectNameInput.value;
  const finishDate = finishDateInput.value;
  const description = descriptionInput.value;
  const image = imageInput.files[0];

  if (!image) {
    addNewProjectImgErr.textContent = "*Please select an image";
  } else if (!image.type.includes("jpeg") && !image.type.includes("png")) {
    addNewProjectImgErr.textContent = "*Please select a JPEG or PNG image";
  } else if (image.size > 1000000) {
    addNewProjectImgErr.textContent = "*The image must be less than 1MB";
  } else {
    addNewProjectImgErr.textContent = "";
  }

  if (projectName.trim() === "") {
    projectNameInput.nextElementSibling.textContent =
      "*Please enter a project name";
  } else if (projectName.length < 8) {
    projectNameInput.nextElementSibling.textContent =
      "*The project name must be at least 8 characters long";
  } else {
    projectNameInput.nextElementSibling.textContent = "";
  }

  if (finishDate === "") {
    finishDateInput.nextElementSibling.textContent =
      "*Please enter a completed date";
  } else if (new Date(finishDate) > new Date()) {
    finishDateInput.nextElementSibling.textContent =
      "*Completed date cannot be a future date";
  } else {
    finishDateInput.nextElementSibling.textContent = "";
  }

  if (description.trim() === "") {
    descriptionInput.nextElementSibling.textContent =
      "*Please enter a description";
  } else if (description.length < 10) {
    descriptionInput.nextElementSibling.textContent =
      "*The description must be at least 10 characters long";
  } else {
    descriptionInput.nextElementSibling.textContent = "";
  }

  if (
    !addNewProjectImgErr.textContent &&
    !projectNameInput.nextElementSibling.textContent &&
    !finishDateInput.nextElementSibling.textContent &&
    !descriptionInput.nextElementSibling.textContent
  ) {
    const formData = new FormData();
    formData.append("projectName", projectName);
    formData.append("date", finishDate);
    formData.append("descr", description);
    formData.append("image", image);

    fetch("../../db/addProject.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        displayPopUp(result);
        clearInputFields();

        getAllProjectsData();

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

clear_button.addEventListener("click", (e) => {
  e.preventDefault();

  //console.log("clicked");

  projectNameInput.value = "";
  finishDateInput.value = "";
  descriptionInput.value = "";
  imageInput.value = "";
  selectedImgView.value = "";
});
