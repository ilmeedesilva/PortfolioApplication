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

let selectedID;

const selectedDeleteProjectdata = (project, type) => {
  selectedID = project.id;
  let deleteimageEncoded = project.image;
  let deleteimage =
    '<img src="data:image/jpeg;base64,' + deleteimageEncoded + '"/>';

  document.querySelector(".image_wrapper .img_box").innerHTML = deleteimage;

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

deleteRowDeletBtn.addEventListener("click", () => {
  if (deleteRowDeletBtn.textContent === "DELETE") {
    console.log("delete this - ", selectedID);

    fetch("../../db/deleteProjectById.php", {
      method: "POST",
      body: JSON.stringify({ id: selectedID }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Project deleted successfully!");
        } else {
          alert("Failed to delete project");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
});
