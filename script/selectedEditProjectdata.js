const editRowIMGUploder = document.querySelector(
  ".popup_form .image_wrapper input"
);

const editRowHeader = document.querySelector(
  '.popup_form input[name="edit_project_header"]'
);
const editRowDate = document.querySelector(
  '.popup_form input[name="edit_project_date"]'
);
const editRowDesc = document.querySelector(
  '.popup_form textarea[name="edit_project_dec"]'
);
const editRowDeletBtn = document.querySelector(
  ".popup_form .pop_up_edit_save_cancel_wrapper .primary_btn"
);

const selectedEditProjectdata = (project, type) => {
  let editimageEncoded = project.image;
  let editimage =
    '<img src="data:image/jpeg;base64,' + editimageEncoded + '"/>';

  document.querySelector(".image_wrapper .img_box").innerHTML = editimage;

  document.querySelector(".popup_form_wrapper").classList.remove("hide");

  editRowIMGUploder.style.display = "block";
  document.querySelector(".popup_form .image_wrapper p").style.display =
    "block";
  editRowHeader.readOnly = false;
  editRowDate.readOnly = false;
  editRowDesc.readOnly = false;

  editRowHeader.value = project.projectName;
  editRowDate.value = project.date;
  editRowDesc.value = project.descr;

  editRowDeletBtn.classList.remove("delete_btn");
  editRowDeletBtn.innerHTML = "SAVE";
  editRowDeletBtn.addEventListener("click", (e) =>
    handleEditProject(e, project, type)
  );
};

const uploadedEditProjectImg = document.querySelector(".uploader_edit_project");
const uploadedEditProjectImgError = document.querySelector(
  ".uploader_edit_project_error"
);

uploadedEditProjectImg.addEventListener("change", function () {
  if (uploadedEditProjectImg.files.length === 0) {
    uploadedEditProjectImgError.innerHTML = "*Please select an image";
    return;
  }

  const file = uploadedEditProjectImg.files[0];

  if (file.size > 1048576) {
    uploadedEditProjectImgError.innerHTML = "*File size exceeds 1MB";
    return;
  }

  if (!/^image\/(jpe?g|png)$/i.test(file.type)) {
    uploadedEditProjectImgError.innerHTML = "*File type must be JPG or PNG";
    return;
  }
  uploadedEditProjectImgError.innerHTML = "";
});

const handleEditProject = (e, project, type) => {
  e.preventDefault();

  const newHeaderError = document.querySelector(
    ".edit_project_header_error_txt"
  );
  const newDateError = document.querySelector(".edit_project_create_date");
  const newDescError = document.querySelector(".edit_project_dec");
  const selectedDate = new Date(editRowDate.value);
  const currentDate = new Date();

  if (selectedDate > currentDate) {
    newDateError.innerHTML = "*Invalid Date";
  } else if (!editRowDate.value) {
    newDateError.innerHTML = "*Date cannont be empty";
  } else {
    newDateError.innerHTML = "";
  }
  if (!editRowHeader.value) {
    newHeaderError.innerHTML = "*Project Title cannot be empty";
  } else if (editRowHeader.value.length < 10) {
    newHeaderError.innerHTML =
      "*Project Title must have more than 10 characters";
  } else {
    newHeaderError.innerHTML = "";
  }
  if (editRowDesc.value.length < 20) {
    newDescError.innerHTML =
      "*Project description must have more than 20 characters";
  } else {
    newDescError.innerHTML = "";
  }

  const editImageEncoded = project.image;
  const file = uploadedEditProjectImg.files[0];

  const editHeader = editRowHeader.value.trim();
  const editDate = editRowDate.value.trim();
  const editDesc = editRowDesc.value.trim();

  if (
    editHeader === project.projectName.trim() &&
    editDate === project.date &&
    editDesc === project.descr.trim()
  ) {
    alert(
      "Please fill all fields and make sure they are different from the original data"
    );
    return;
  }
  console.log("file - ", file);
  console.log(
    "uploadedEditProjectImgError.innerHTML  - ",
    uploadedEditProjectImgError.innerHTML
  );

  if (
    !uploadedEditProjectImgError.innerHTML &&
    !newDateError.innerHTML &&
    !newHeaderError.innerHTML &&
    !newDescError.innerHTML &&
    type === "Edit"
  ) {
    if (file) {
      const data = new FormData();
      data.append("project_id", project.id);
      data.append("image", file);
      data.append("project_name", editHeader);
      data.append("date", editDate);
      data.append("descr", editDesc);
      console.log("project.id - ", project.id);

      fetch("../../db/putProjectData.php", {
        method: "POST",
        body: data,
      })
        .then((response) => {
          if (response.status === 200) {
            alert("Data saved successfully");
            getAllProjectsData();
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
      data.append("project_id", project.id);
      // data.append("image", editRowIMGUploder.files[0]);
      data.append("project_name", editHeader);
      data.append("date", editDate);
      data.append("descr", editDesc);
      console.log("project.id - ", project.id);

      fetch("../../db/putProjectData.php", {
        method: "POST",
        body: data,
      })
        .then((response) => {
          if (response.status === 200) {
            alert("Data saved successfully");
            getAllProjectsData();
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
