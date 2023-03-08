const editTitle = document.querySelector('input[name="edit_title"]');

const editDescription = document.querySelector('textarea[name="edit_desc"]');

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
  deletBtnEditRow.addEventListener(
    "click",
    (e) => handleEditService(e, service, type) // function eketa type eke pass karala naha ne mata therenneh naaaaa mata baaaaaaa mageh moleh rdenawaaaa :(. guti kanna asai da
  );
}; //id eke waradi. id ekak awith nah

const handleEditService = (e, service, type) => {
  const title_error = document.querySelector(".edittitle_error");
  const desc_error = document.querySelector(".editdesc_error");

  e.preventDefault();

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

  if (!title_error.innerHTML && !desc_error.innerHTML && type === "Edit") {
    const data = new FormData();
    data.append("id", parseInt(service.id));
    data.append("title", editTitle.value);
    data.append("description", editDescription.value);

    console.log(" service.id - ", service.id);
    console.log(" editTitle.value - ", editTitle.value);
    console.log(" editDescription.value - ", editDescription.value);

    fetch("../../db/putServiceData.php", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        console.log("response - ", response);
        if (response.status === 200) {
          alert("Data saved successfully");
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
};
