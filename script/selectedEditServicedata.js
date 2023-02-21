const editTitle = document.querySelector('input[name="edit_title"]');


const editDescription = document.querySelector(
  'textarea[name="edit_desc"]'
);

const deletBtnEditRow = document.querySelector(
  ".pop_up_edit_save_cancel_wrapper .delete_edit_service_save"
);

const selectedEditServicedata = (service, type) => {

  editTitle.readOnly = false;
  editDescription.readOnly = false;

  editTitle.value = service.title;
  editDescription.value = service.description;

  deletBtnEditRow.classList.remove("delete_btn");
  deletBtnEditRow.innerHTML = "SAVE";
  deletBtnEditRow.addEventListener("click", (e) => handleEditService(e, service));
};

const handleEditService = (e, service) => {
  const title_error = document.querySelector(".edittitle_error");
  const desc_error = document.querySelector(".editdesc_error");

  e.preventDefault();

  console.log(editTitle);
  // Title
  if (!editTitle.value) {
    title_error.innerHTML = "*Title cannot be empty";
  } else if (!editTitle.value.match(/^[a-zA-Z\s]+$/)) {
    title_error.innerHTML = "*Title should not contain numbers";
  } else {
    title_error.innerHTML = "";
  }

  // Description
  if (!editDescription.value) {
    desc_error.innerHTML = "*Description cannot be empty";
  } else {
    desc_error.innerHTML = "";
  }

  const edit_Title = editTitle.value.trim();
  const edit_Description = editDescription.value.trim();

  if (
    edit_Title === service.title.trim() &&
    edit_Description === service.description.trim()
  ) {
    alert(
      "Please fill all fields and make sure they are different from the original data"
    );
    return;
  }

  const data = new FormData();
  data.append("id", service.id);
  data.append("title", editTitle);
  data.append("description", editDescription);

  fetch("../../db/putServiceData.php", {
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
//reader.readAsDataURL(file);
