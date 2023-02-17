const deleteName = document.querySelector(
  '.popup_form input[name="edit_name"]'
);

const deleteUserName = document.querySelector(
  '.popup_form input[name="edit_user_name"]'
);

const deleteContactNo = document.querySelector(
  '.popup_form input[name="edit_contactNo"]'
);

const deleteEmail = document.querySelector(
  '.popup_form input[name="edit_email"]'
);

const deleteRowDeletBtn = document.querySelector(
  ".popup_form .pop_up_edit_save_cancel_wrapper .primary_btn"
);

let selectedID;

const selectedDeleteUserdata = (user, type) => {
  selectedID = user.id;

  document.querySelector(".popup_form_wrapper").classList.remove("hide");


  deleteName.readOnly = true;
  deleteUserName.readOnly = true;
  deleteEmail.readOnly = true;
  deleteContactNo.readOnly = true;

  deleteName.value = user.name;
  deleteUserName.value = user.user_name;
  deleteEmail.value = user.email;
  deleteContactNo.value = user.contactNo;

  deleteRowDeletBtn.classList.add("delete_btn");
  deleteRowDeletBtn.innerHTML = "DELETE";
};

deleteRowDeletBtn.addEventListener("click", () => {
  if (deleteRowDeletBtn.textContent === "DELETE") {
    fetch("../../db/deleteUserById.php", {
      method: "POST",
      body: JSON.stringify({ id: selectedID }),
    })
      .then((response) => {
        if (response.ok) {
          alert("User deleted successfully!");
          getAllUserData();
        } else {
          alert("Failed to delete user");
          getAllUserData();
        }
      })
      .catch((error) => {
        alert(error);
      });

    document.querySelector(".popup_form_wrapper").classList.add("hide");
  }
});
