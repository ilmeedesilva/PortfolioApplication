const serviceNameInput = document.getElementById("new-service-name");
const descriptionInput = document.getElementById("new-service-description");
const imageInput = document.getElementById("image-upload-new-service");
const selectedImgView = document.querySelector(
  ".selected_img_view_new_service"
);
const addNewServiceImgErr = document.querySelector(".add_new_service_img_err");
const addNewServiceNameErr = document.querySelector(".new_service_error");
const addNewServiceDescErr = document.querySelector(".desc_error_new_service");
// const errorMessages = document.querySelectorAll(".error-msg");

const saveButtonService = document.querySelector(".add_service_save_btn");
const clear_button_service = document.querySelector(".add_service_clear_btn");

selectedImgView.style.display = "none";

const clearAddNewInputFields = () => {
  serviceNameInput.value = "";
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

saveButtonService.addEventListener("click", () => {
  // errorMessages.forEach((errorMessage) => {
  //   errorMessage.textContent = "";
  // });

  const serviceName = serviceNameInput.value;
  const description = descriptionInput.value;
  const image = imageInput.files[0];

  if (!image) {
    addNewServiceImgErr.textContent = "*Please select an image";
  } else if (!image.type.includes("jpeg") && !image.type.includes("png")) {
    addNewServiceImgErr.textContent = "*Please select a JPEG or PNG image";
  } else if (image.size > 1000000) {
    addNewServiceImgErr.textContent = "*The image must be less than 1MB";
  } else {
    addNewServiceImgErr.textContent = "";
  }

  if (serviceName.trim() === "") {
    serviceNameInput.nextElementSibling.textContent =
      "*Please enter a service name";
  } else if (serviceName.length < 5 || serviceName.length > 150) {
    serviceNameInput.nextElementSibling.textContent =
      "*The service name must be at least 5 characters long and less than 50 characters";
  } else {
    serviceNameInput.nextElementSibling.textContent = "";
  }

  if (description.trim() === "") {
    descriptionInput.nextElementSibling.textContent =
      "*Please enter a description";
  } else if (description.length < 10 || description.length > 150) {
    descriptionInput.nextElementSibling.textContent =
      "*The description must be at least 10 characters long and less than 150 characters";
  } else {
    descriptionInput.nextElementSibling.textContent = "";
  }

  if (
    !addNewServiceImgErr.textContent &&
    !serviceNameInput.nextElementSibling.textContent &&
    !descriptionInput.nextElementSibling.textContent
  ) {
    const formData = new FormData();
    formData.append("serviceName", serviceName);
    formData.append("descr", description);
    formData.append("image", image);

    fetch("../../db/addNewService.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        displayPopUp(result);

        getAllServicesData();

        clearAddNewInputFields();
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

clear_button_service.addEventListener("click", (e) => {
  e.preventDefault();

  //console.log("clicked");

  serviceNameInput.value = "";
  descriptionInput.value = "";
  imageInput.value = "";
  selectedImgView.value = "";
});
