// const projectNameInput = document.getElementById("project-name");
// const finishDateInput = document.getElementById("finish-date");
// const descriptionInput = document.getElementById("description");
// const imageInput = document.getElementById("image-upload");
// const selectedImgView = document.querySelector(".selected_img_view");
// const addNewProjectImgErr = document.querySelector(".add_new_project_img_err");
// const errorMessages = document.querySelectorAll(".error-msg");

// const saveButton = document.getElementById("save");
// const clear_button = document.querySelector(".add_project_clear_btn");

// selectedImgView.style.display = "none";

// const clearAddNewInputFields = () => {

//   projectNameInput.value="";
//   finishDateInput.value="";
//   descriptionInput.value="";
//   imageInput.value="";
//   selectedImgView.value="";
// };

// imageInput.addEventListener("change", () => {
//   if (imageInput.files.length > 0) {
//     selectedImgView.style.backgroundImage = `url('${URL.createObjectURL(
//       imageInput.files[0]
//     )}')`;
//     selectedImgView.style.display = "block";
//   } else {
//     selectedImgView.style.display = "none";
//   }
// });

// saveButton.addEventListener("click", () => {
//   errorMessages.forEach((errorMessage) => {
//     errorMessage.textContent = "";
//   });

//   const projectName = projectNameInput.value;
//   const finishDate = finishDateInput.value;
//   const description = descriptionInput.value;
//   const image = imageInput.files[0];

//   if (!image) {
//     addNewProjectImgErr.textContent = "*Please select an image";
//   } else if (!image.type.includes("jpeg") && !image.type.includes("png")) {
//     addNewProjectImgErr.textContent = "*Please select a JPEG or PNG image";
//   } else if (image.size > 1000000) {
//     addNewProjectImgErr.textContent = "*The image must be less than 1MB";
//   } else {
//     addNewProjectImgErr.textContent = "";
//   }

//   if (projectName.trim() === "") {
//     projectNameInput.nextElementSibling.textContent =
//       "*Please enter a project name";
//   } else if (projectName.length < 8) {
//     projectNameInput.nextElementSibling.textContent =
//       "*The project name must be at least 8 characters long";
//   } else {
//     projectNameInput.nextElementSibling.textContent = "";
//   }

//   if (finishDate === "") {
//     finishDateInput.nextElementSibling.textContent =
//       "*Please enter a completed date";
//   } else if (new Date(finishDate) > new Date()) {
//     finishDateInput.nextElementSibling.textContent =
//       "*Completed date cannot be a future date";
//   } else {
//     finishDateInput.nextElementSibling.textContent = "";
//   }

//   if (description.trim() === "") {
//     descriptionInput.nextElementSibling.textContent =
//       "*Please enter a description";
//   } else if (description.length < 10) {
//     descriptionInput.nextElementSibling.textContent =
//       "*The description must be at least 10 characters long";
//   } else {
//     descriptionInput.nextElementSibling.textContent = "";
//   }

//   if (
//     !addNewProjectImgErr.textContent &&
//     !projectNameInput.nextElementSibling.textContent &&
//     !finishDateInput.nextElementSibling.textContent &&
//     !descriptionInput.nextElementSibling.textContent
//   ) {
//     const formData = new FormData();
//     formData.append("projectName", projectName);
//     formData.append("date", finishDate);
//     formData.append("descr", description);
//     formData.append("image", image);

//     fetch("../../db/addProject.php", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => response.text())
//       .then((result) => {
//         displayPopUp(result);

//         getAllProjectsData();

//         clearAddNewInputFields();
//         // if (result.includes("success")) {

//         // } else {
//         //   alert("Failed to save data");
//         // }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }
// });

// clear_button.addEventListener("click", (e) => {
//   e.preventDefault();

//   //console.log("clicked");

//   projectNameInput.value = "";
//   finishDateInput.value = "";
//   descriptionInput.value = "";
//   imageInput.value = "";
//   selectedImgView.value = "";
// });

const projectNameInput = $("#project-name");
const finishDateInput = $("#finish-date");
const descriptionInput = $("#description");
const imageInput = $("#image-upload");
const selectedImgView = $(".selected_img_view");
const addNewProjectImgErr = $(".add_new_project_img_err");
const errorMessages = $(".error-msg");

selectedImgView.hide();

const clearAddNewInputFields = () => {
  projectNameInput.val("");
  finishDateInput.val("");
  descriptionInput.val("");
  imageInput.val("");
  selectedImgView.val("");
};

imageInput.on("change", () => {
  if (imageInput[0].files.length > 0) {
    selectedImgView.css(
      "background-image",
      `url('${URL.createObjectURL(imageInput[0].files[0])}')`
    );
    selectedImgView.show();
  } else {
    selectedImgView.hide();
  }
});

$("#save").on("click", () => {
  errorMessages.text("");

  const projectName = projectNameInput.val();
  const finishDate = finishDateInput.val();
  const description = descriptionInput.val();
  const image = imageInput[0].files[0];

  if (!image) {
    addNewProjectImgErr.text("*Please select an image");
  } else if (!image.type.includes("jpeg") && !image.type.includes("png")) {
    addNewProjectImgErr.text("*Please select a JPEG or PNG image");
  } else if (image.size > 1000000) {
    addNewProjectImgErr.text("*The image must be less than 1MB");
  } else {
    addNewProjectImgErr.text("");
  }

  if (projectName.trim() === "") {
    projectNameInput.next().text("*Please enter a project name");
  } else if (projectName.length < 8) {
    projectNameInput
      .next()
      .text("*The project name must be at least 8 characters long");
  } else {
    projectNameInput.next().text("");
  }

  if (finishDate === "") {
    finishDateInput.next().text("*Please enter a completed date");
  } else if (new Date(finishDate) > new Date()) {
    finishDateInput.next().text("*Completed date cannot be a future date");
  } else {
    finishDateInput.next().text("");
  }

  if (description.trim() === "") {
    descriptionInput.next().text("*Please enter a description");
  } else if (description.length < 10) {
    descriptionInput
      .next()
      .text("*The description must be at least 10 characters long");
  } else {
    descriptionInput.next().text("");
  }

  if (
    !addNewProjectImgErr.text() &&
    !projectNameInput.next().text() &&
    !finishDateInput.next().text() &&
    !descriptionInput.next().text()
  ) {
    const formData = new FormData();
    formData.append("projectName", projectName);
    formData.append("date", finishDate);
    formData.append("descr", description);
    formData.append("image", image);

    $.ajax({
      url: "../../db/addProject.php",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: (result) => {
        displayPopUp(result);

        getAllProjectsData();

        clearAddNewInputFields();
      },
      error: (error) => {
        console.error("Error:", error);
      },
    });
  }
});

$(".add_project_clear_btn").on("click", (e) => {
  e.preventDefault();

  projectNameInput.val("");
  finishDateInput.val("");
  descriptionInput.val("");
  imageInput.val("");
  selectedImgView.value("");
});
