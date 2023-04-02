const editIMGUploder = document.querySelector(
  ".popup_form .image_wrapper input[name='serviceItemImgInput']"
);

const imgUploadLabel = document.querySelector(".service_lb_img");

const imgUploadInput = document.querySelector(
  "Input[name='serviceItemImgInput']"
);

const editTitle = document.querySelector('input[name="edit_title"]');

const editDescription = document.querySelector('textarea[name="edit_desc"]');

const deletBtnEditRow = document.querySelector(
  ".pop_up_edit_save_cancel_wrapper .delete_edit_service_save"
);
let ServicePrevUserID;
let isValid = true;
const selectedEditServicedata = (service, type) => {
  let editimageEncoded = service.image;
  let editimage =
    '<img src="data:image/jpeg;base64,' + editimageEncoded + '"/>';

  document.querySelector(".image_wrapper .prev_service_img").innerHTML =
    editimage;

  document.querySelector(".popup_form_wrapper").classList.remove("hide");

  editIMGUploder.style.display = "block";
  document.querySelector(".popup_form .image_wrapper p").style.display =
    "block";

  imgUploadLabel.style.display = "block";
  imgUploadInput.style.display = "block";

  editTitle.readOnly = false;
  editDescription.readOnly = false;

  editTitle.value = service.serviceName;
  editDescription.value = service.descr;

  deletBtnEditRow.classList.remove("delete_btn");
  deletBtnEditRow.innerHTML = "SAVE";

  deletBtnEditRow.addEventListener("click", (e) => {
    if (
      deletBtnEditRow.getAttribute("data-id") === service.id &&
      (ServicePrevUserID !== deletBtnEditRow.getAttribute("data-id") ||
        !isValid)
    ) {
      handleEditService(e, service, type);
      ServicePrevUserID = service.id;
      return true;
    }
  });
};

const uploadedEditServiceImg = document.querySelector(".uploader_edit_service");
const uploadedEditServiceImgError = document.querySelector(
  ".uploader_edit_service_error"
);

uploadedEditServiceImg.addEventListener("change", function () {
  if (uploadedEditServiceImg.files.length === 0) {
    uploadedEditServiceImgError.innerHTML = "*Please select an image";
    return;
  }

  const file = uploadedEditServiceImg.files[0];

  if (file.size > 1048576) {
    uploadedEditServiceImgError.innerHTML = "*File size exceeds 1MB";
    return;
  }

  if (!/^image\/(jpe?g|png)$/i.test(file.type)) {
    uploadedEditServiceImgError.innerHTML = "*File type must be JPG or PNG";
    return;
  }
  uploadedEditServiceImgError.innerHTML = "";
});

const handleEditService = (e, service, type) => {
  const title_error = document.querySelector(".edittitle_error");
  const desc_error = document.querySelector(".editdesc_error");

  e.preventDefault();

  // Title
  if (!editTitle.value) {
    title_error.innerHTML = "*Title cannot be empty";
  } else {
    title_error.innerHTML = "";
  }

  // Description
  if (!editDescription.value) {
    desc_error.innerHTML = "*Description cannot be empty";
  } else {
    desc_error.innerHTML = "";
  }

  if (
    uploadedEditServiceImgError.textContent ||
    title_error.textContent ||
    desc_error.textContent
  ) {
    console.log("erro || ");
    isValid = false;
  }

  const editImageEncoded = service.image;
  const file = uploadedEditServiceImg.files[0];
  const edit_Title = editTitle.value.trim();
  const edit_Description = editDescription.value.trim();
  console.log(" file = ", file);
  if (
    edit_Title === service.serviceName.trim() &&
    edit_Description === service.descr.trim() &&
    !file
  ) {
    alert(
      "Please fill all fields and make sure they are different from the original data"
    );
    isValid = false;
    return;
  }

  if (
    !uploadedEditServiceImgError.innerHTML &&
    !title_error.innerHTML &&
    !desc_error.innerHTML &&
    type === "Edit"
  ) {
    isValid = true;
    if (file) {
      const data = new FormData();
      data.append("id", parseInt(service.id));
      data.append("image", file);
      data.append("addservice", editTitle.value);
      data.append("serviceDesc", editDescription.value);

      fetch("../../db/putServiceData.php", {
        method: "POST",
        body: data,
      })
        .then((response) => {
          if (response.status === 200) {
            alert("Data saved successfully");
            prevUserID = "";
            hideElements();
            getAllServicesData();
            editRowDeletBtn.hasAttribute("data-id")
              ? editRowDeletBtn.removeAttribute("data-id")
              : null;
          } else {
            alert("Failed to save data");
          }
        })
        .catch((error) => {
          console.log(error);
          alert("Failed to save data");
        });
    } else {
      const data = new FormData();
      data.append("id", parseInt(service.id));
      data.append("addservice", editTitle.value);
      data.append("serviceDesc", editDescription.value);

      fetch("../../db/putServiceData.php", {
        method: "POST",
        body: data,
      })
        .then((response) => {
          if (response.status === 200) {
            alert("Data saved successfully");
            ServicePrevUserID = "";
            hideElements();
            getAllServicesData();
          } else {
            alert("Failed to save data");
          }
        })
        .catch((error) => {
          console.log(error);
          alert("Failed to save data");
        });
    }
  }
};
