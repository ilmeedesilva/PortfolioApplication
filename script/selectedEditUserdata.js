const editName = document.querySelector('.popup_form input[name="edit_name"]');

const editUserName = document.querySelector(
  '.popup_form input[name="edit_user_name"]'
);

const editContactNo = document.querySelector(
  '.popup_form input[name="edit_contactNo"]'
);

const editEmail = document.querySelector(
  '.popup_form input[name="edit_email"]'
);

const editRowDeletBtn = document.querySelector(
  ".popup_form .pop_up_edit_save_cancel_wrapper .primary_btn"
);

let prevUser = {};
let isValid = true;

const isSameObjectWithoutID = (obj2) => {
  if (Object.keys(prevUser).length === 0) {
    return true;
  }
  if (Object.keys(prevUser).length !== Object.keys(obj2).length) {
    return true;
  }

  for (let key in prevUser) {
    if (key !== "id" && prevUser[key] !== obj2[key]) {
      return true;
    }
  }

  return false;
};
let prevUserID;
const selectedEditUserdata = (user, type, id) => {
  document.querySelector(".popup_form_wrapper").classList.remove("hide");
  document.querySelector(".reset_user_password").classList.remove("hide");
  document.querySelector(".reset_btn").dataset.myAttribute = user.id;
  document.querySelector(".reset_btn").classList.add("hide");
  document.querySelector(".crud_btn").classList.remove("hide");
  editName.readOnly = false;
  editUserName.readOnly = false;
  editEmail.readOnly = false;
  editContactNo.readOnly = false;

  editName.value = "";
  editUserName.value = "";
  editEmail.value = "";
  editContactNo.value = "";

  editName.value = user.name;
  editUserName.value = user.user_name;
  editEmail.value = user.email;
  editContactNo.value = user.contactNo;

  editRowDeletBtn.classList.remove("delete_btn");
  editRowDeletBtn.innerHTML = "SAVE";
  editRowDeletBtn.classList.add("update_user");

  editRowDeletBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      editRowDeletBtn.getAttribute("data-id") === user.id &&
      (prevUserID !== editRowDeletBtn.getAttribute("data-id") || !isValid)
    ) {
      handleEditUser(e, user);
      prevUserID = user.id;
      return true;
    }
  });
};

const handleEditUser = (e, user) => {
  e.preventDefault();
  const name_error = document.querySelector(".editname_error");

  const email_error = document.querySelector(".editemail_error");

  const contactno_error = document.querySelector(".editcontactNo_error");

  const username_error = document.querySelector(".editusername_error");

  // Name
  if (!editName.value) {
    name_error.innerHTML = "*Name cannot be empty";
    isValid = false;
  } else if (!editName.value.match(/^[a-zA-Z\s]+$/)) {
    name_error.innerHTML = "*Name should not contain numbers";
    isValid = false;
  } else {
    name_error.innerHTML = "";
  }

  // Email
  if (!editEmail.value) {
    email_error.innerHTML = "*Email cannot be empty";
    isValid = false;
  } else if (
    !editEmail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    email_error.innerHTML = "*Enter a valid email address";
    isValid = false;
  } else {
    email_error.innerHTML = "";
  }

  // Contact no
  if (!editContactNo.value) {
    contactno_error.innerHTML = "*Contact number cannot be empty";
    isValid = false;
  } else if (!editContactNo.value.match(/^\d{10}$/)) {
    contactno_error.innerHTML = "*Enter a valid contact number";
    isValid = false;
  } else {
    contactno_error.innerHTML = "";
  }

  // User Name
  if (!editUserName.value) {
    username_error.innerHTML = "*User name cannot be empty";
    isValid = false;
  } else {
    if (!editUserName.value.match(/^[A-Za-z][A-Za-z]+\d*$|^[a-z]\d\d+$/)) {
      username_error.innerHTML = "*First 2 characters must be letters";
      isValid = false;
    } else if (
      editUserName.value.length < 4 ||
      editUserName.value.length > 15
    ) {
      username_error.innerHTML = "*User name must contain 4 to 15 charcters";
      isValid = false;
    } else {
      username_error.innerHTML = "";
    }
  }

  const editname = editName.value.trim();
  const editusername = editUserName.value.trim();
  const editcontactno = editContactNo.value.trim();
  const editemail = editEmail.value.trim();

  if (
    editname === user.name.trim() &&
    editusername === user.user_name.trim() &&
    editcontactno === user.contactNo.trim() &&
    editemail === user.email.trim()
  ) {
    alert(
      "Please fill all fields and make sure they are different from the original data"
    );
    isValid = false;
    return;
  } else {
    if (
      username_error.textContent ||
      contactno_error.textContent ||
      email_error.textContent ||
      name_error.textContent
    ) {
      isValid = false;
    } else {
      isValid = true;
      const data = new FormData();
      data.append("edit_id", user.id);
      data.append("edit_name", editname);
      data.append("edit_user_name", editusername);
      data.append("edit_contactNo", editcontactno);
      data.append("edit_email", editemail);

      fetch("../../db/putUserData.php", {
        method: "POST",
        body: data,
      })
        .then((response) => {
          if (response.status === 200) {
            alert("Data saved successfully");
            getAllUsersData();
            prevUser = {
              id: user.id,
              name: editname,
              user_name: editusername,
              email: editemail,
              contactNo: editcontactno,
            };
            hideElements();
            prevUserID = "";
            return;
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
//reader.readAsDataURL(file);
