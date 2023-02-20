const deleteTitle = document.querySelector(
  'input[name="edit_title"]'
);

const deleteDescription = document.querySelector(
  'textarea[name="edit_desc"]'
);
const deleteRowDeletServiceBtn = document.querySelector(
  ".pop_up_edit_save_cancel_wrapper .delete_edit_service_save"
);

let selectedServiceID;

const selectedDeleteServicedata = (service, type) => {
  selectedServiceID = service.id;

  console.log("deleteeeeeeeee");
  
  deleteTitle.readOnly = true;
  deleteDescription.readOnly = true;

  deleteTitle.value = service.title;
  deleteDescription.value = service.description;

  deleteRowDeletServiceBtn.classList.add("delete_btn");
  deleteRowDeletServiceBtn.innerHTML = "DELETE";
};

deleteRowDeletServiceBtn.addEventListener("click", () => {
  if (deleteRowDeletServiceBtn.textContent === "DELETE") {
    fetch("../../db/deleteServiceById.php", {
      method: "POST",
      body: JSON.stringify({ id: selectedServiceID }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Service deleted successfully!");
        } else {
          alert("Failed to delete service");
        }
      })
      .catch((error) => {
        alert(error);
      });

    document.querySelector(".popup_form_wrapper").classList.add("hide");
  }
});
