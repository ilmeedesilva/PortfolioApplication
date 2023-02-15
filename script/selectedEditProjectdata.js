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
    uploadedEditProjectImgError.innerHTML = "No file selected";
    return;
  }

  const file = uploadedEditProjectImg.files[0];

  if (file.size > 1048576) {
    uploadedEditProjectImgError.innerHTML = "File size exceeds 1MB";
    return;
  }

  if (!/^image\/(jpe?g|png)$/i.test(file.type)) {
    uploadedEditProjectImgError.innerHTML = "File type must be JPG or PNG";
    return;
  }
  uploadedEditProjectImgError.innerHTML = "";
});

const handleEditProject = (e, project, type) => {
  e.preventDefault();

  const editImageEncoded = project.image;
  if (file instanceof Blob) {
    const reader = new FileReader();
    console.log(file);
    reader.onload = function (event) {
      if (event.target.result === editImageEncoded) {
        uploadedEditProjectImgError.innerHTML =
          "uploaded image same as original";
        return;
      } else {
        uploadedEditProjectImgError.innerHTML = "";
      }

      const editHeader = editRowHeader.value.trim();
      const editDate = editRowDate.value.trim();
      const editDesc = editRowDesc.value.trim();

      if (
        editImageEncoded === editRowIMGUploder.value ||
        editHeader === "" ||
        editDate === "" ||
        editDesc === ""
      ) {
        alert(
          "Please fill all fields and make sure they are different from the original data"
        );
        return;
      }

      const data = new FormData();
      data.append("project_id", project.id);
      data.append("image", editRowIMGUploder.files[0]);
      data.append("project_name", editHeader);
      data.append("date", editDate);
      data.append("descr", editDesc);

      fetch("../../db/putProjectData.php", {
        method: "POST",
        body: data,
      })
        .then((response) => {
          if (response.status === 200) {
            alert("Data saved successfully");
          } else {
            alert("Failed to save data");
          }
        })
        .catch((error) => {
          console.log(error);
          alert("Failed to save data");
        });
    };
  }
  reader.readAsDataURL(editRowIMGUploder.files[0]);
};
