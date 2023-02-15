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
};
