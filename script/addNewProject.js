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
  } else if (projectName.length < 8 || projectName.length > 20) {
    projectNameInput
      .next()
      .text("*The project name must be between 8 to 20 characters");
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
  } else if (description.length < 10 || description.length > 200) {
    descriptionInput
      .next()
      .text("*The description must be between 20 to 200 characters");
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
  clearAddNewInputFields();
  // projectNameInput.val("");
  // finishDateInput.val("");
  // descriptionInput.val("");
  // imageInput.val("");
  // selectedImgView.value("");
});
