const deleteRowIMGUploder = document.querySelector(
  ".popup_form .image_wrapper input"
);

const deleteRowHeader = document.querySelector(
  '.popup_form input[name="edit_project_header"]'
);
const deleteRowDate = document.querySelector(
  '.popup_form input[name="edit_project_date"]'
);
const deleteRowDesc = document.querySelector(
  '.popup_form textarea[name="edit_project_dec"]'
);
const deleteRowDeletBtn = document.querySelector(
  ".popup_form .pop_up_edit_save_cancel_wrapper .primary_btn"
);

const selectedDeleteProjectdata = (project, type) => {
  console.log(project);
  console.log(type);
  document.querySelector(".popup_form_wrapper").classList.remove("hide");

  deleteRowIMGUploder.style.display = "none";
  document.querySelector(".popup_form .image_wrapper p").style.display = "none";
  deleteRowHeader.readOnly = true;
  deleteRowDate.readOnly = true;
  deleteRowDesc.readOnly = true;

  deleteRowHeader.value = project.projectName;
  deleteRowDate.value = project.date;
  deleteRowDesc.value = project.descr;

  deleteRowDeletBtn.classList.add("delete_btn");
  deleteRowDeletBtn.innerHTML = "DELETE";
};
